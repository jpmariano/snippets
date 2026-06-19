from pathlib import Path
from docling.document_converter import DocumentConverter

input_folder = Path("pdfs")
output_folder = Path("markdown")

output_folder.mkdir(exist_ok=True)

converter = DocumentConverter()

pdf_files = list(input_folder.glob("*.pdf"))
//To include PDFs inside subfolders too, change this line:
//pdf_files = list(input_folder.rglob("*.pdf"))
if not pdf_files:
    print("No PDF files found.")
else:
    for pdf_file in pdf_files:
        try:
            print(f"Converting: {pdf_file.name}")

            result = converter.convert(pdf_file)
            markdown_text = result.document.export_to_markdown()

            output_file = output_folder / f"{pdf_file.stem}.md"
            output_file.write_text(markdown_text, encoding="utf-8")

            print(f"Saved: {output_file}")

        except Exception as error:
            print(f"Could not convert {pdf_file.name}")
            print(error)