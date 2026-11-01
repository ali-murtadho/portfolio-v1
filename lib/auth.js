import crypto from 'crypto'

const COOKIE_NAME = 'admin_session'
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7 // 7 hari

function getSecret() {
  const secret = process.env.ADMIN_SECRET || process.env.ADMIN_PASSWORD
  if (!secret) throw new Error('ADMIN_PASSWORD belum di-set.')
  return secret
}

function sign(value) {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
}

function safeEqual(a, b) {
  const bufA = Buffer.from(String(a))
  const bufB = Buffer.from(String(b))
  return bufA.length === bufB.length && crypto.timingSafeEqual(bufA, bufB)
}

export function checkPassword(password) {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected || typeof password !== 'string') return false
  return safeEqual(password, expected)
}

function cookieAttributes(maxAge) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`
}

export function setSessionCookie(res) {
  const expires = Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS
  const token = `${expires}.${sign(String(expires))}`
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=${token}; ${cookieAttributes(SESSION_TTL_SECONDS)}`)
}

export function clearSessionCookie(res) {
  res.setHeader('Set-Cookie', `${COOKIE_NAME}=; ${cookieAttributes(0)}`)
}

export function isAuthenticated(req) {
  const token = req.cookies?.[COOKIE_NAME]
  if (!token) return false
  const [expires, signature] = token.split('.')
  if (!expires || !signature) return false
  if (Number(expires) < Date.now() / 1000) return false
  try {
    return safeEqual(signature, sign(expires))
  } catch {
    return false
  }
}

// Bungkus handler API agar hanya bisa diakses admin yang sudah login.
export function withAdmin(handler) {
  return async (req, res) => {
    if (!isAuthenticated(req)) {
      return res.status(401).json({ error: 'Unauthorized' })
    }
    return handler(req, res)
  }
}
