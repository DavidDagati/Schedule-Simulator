import json
import PyPDF2
import re
import os

reader = PyPDF2.PdfReader('PDFs\COMP Course Descriptions.pdf')
for page in reader.pages:
    print(page.extract_text())
    code = "(?<=\n)COMP -[0-9]{4}"
    name = "(?<=COMP -[0-9]{4}. ).*$"
    description = ""

    