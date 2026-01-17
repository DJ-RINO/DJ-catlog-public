
import sys
from pypdf import PdfReader

def get_pdf_size(path):
    try:
        reader = PdfReader(path)
        if len(reader.pages) > 0:
            box = reader.pages[0].mediabox
            return f"Pages: {len(reader.pages)}, Size: {box.width}x{box.height}"
    except Exception as e:
        return str(e)

print("Old:", get_pdf_size("/Users/matsufujiwataru/GIt/DJ_catalog/old_DJ2026_earlyspring_catalog.pdf"))
print("New:", get_pdf_size("/Users/matsufujiwataru/GIt/DJ_catalog/DJ2026_earlyspring_catalog.pdf"))
