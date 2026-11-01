import { Pool } from 'pg'

// Satu pool dipakai ulang antar request (dan antar hot-reload saat dev).
const globalForPg = globalThis

function createPool() {
  const connectionString = process.env.DATABASE_URL
  if (!connectionString) return null
  const isLocal = /localhost|127\.0\.0\.1/.test(connectionString)
  return new Pool({
    connectionString,
    ssl: isLocal ? false : { rejectUnauthorized: false },
    max: 3
  })
}

export function getPool() {
  if (globalForPg.__pgPool === undefined) {
    globalForPg.__pgPool = createPool()
  }
  return globalForPg.__pgPool
}

export async function ensureTable() {
  const pool = getPool()
  if (!pool) return null
  if (!globalForPg.__pgTableReady) {
    globalForPg.__pgTableReady = pool.query(`
      CREATE TABLE IF NOT EXISTS site_content (
        key        TEXT PRIMARY KEY,
        data       JSONB NOT NULL,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `).catch(err => {
      globalForPg.__pgTableReady = null
      throw err
    })
  }
  await globalForPg.__pgTableReady
  return pool
}
