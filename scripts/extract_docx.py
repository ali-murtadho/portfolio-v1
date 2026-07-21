import sys
import zipfile
import xml.etree.ElementTree as ET

NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

def extract_paragraphs(docx_path):
    with zipfile.ZipFile(docx_path) as z:
        with z.open('word/document.xml') as f:
            tree = ET.parse(f)
            root = tree.getroot()
            paragraphs = []
            for p in root.findall('.//w:p', NS):
                texts = [t.text for t in p.findall('.//w:t', NS) if t.text]
                if texts:
                    paragraphs.append(''.join(texts).strip())
            return paragraphs

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: extract_docx.py path/to/file.docx')
        sys.exit(1)
    path = sys.argv[1]
    try:
        paras = extract_paragraphs(path)
        for p in paras:
            print(p)
    except Exception as e:
        print('ERROR', e)
        sys.exit(2)
