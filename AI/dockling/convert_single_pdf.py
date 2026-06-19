from docling.document_converter import DocumentConverter
from pathlib import Path

source = "/Users/johnpaulmariano/Downloads/Build_a_Large_Language_Model_(From_Scrat.pdf"
output_file = Path("/Users/johnpaulmariano/Downloads/Build_a_Large_Language_Model_(From_Scrat.md")

try:
    converter = DocumentConverter()
    result = converter.convert(source)

    markdown_text = result.document.export_to_markdown()

    output_file.write_text(markdown_text, encoding="utf-8")

    print(f"Done! Markdown saved to: {output_file}")

except Exception as error:
    print("Something went wrong:")
    print(error)