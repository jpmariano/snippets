from pathlib import Path
from docling.document_converter import DocumentConverter

# Input and output folders
input_folder = Path("/Users/johnpaulmariano/Downloads/convert_2/book_pdf")
output_folder = Path("/Users/johnpaulmariano/Downloads/convert_2/book_md")

# Create output folder if it doesn't exist
output_folder.mkdir(exist_ok=True)

# Supported file extensions
supported_extensions = [".pdf", ".docx", ".epub"]

# Create converter once
converter = DocumentConverter()

# Find all supported files
files_to_convert = []

for extension in supported_extensions:
    files_to_convert.extend(input_folder.rglob(f"*{extension}"))

# Check if files exist
if not files_to_convert:
    print("No supported files found.")
else:
    print(f"Found {len(files_to_convert)} files.\n")

    for file_path in files_to_convert:

        # Output markdown file path
        output_file = output_folder / f"{file_path.stem}.md"

        # Skip if markdown already exists
        if output_file.exists():
            print(f"Skipping (already exists): {output_file.name}")
            continue

        try:
            print(f"Converting: {file_path.name}")

            # Convert document
            result = converter.convert(file_path)

            # Export markdown
            markdown_text = result.document.export_to_markdown()

            # Save markdown
            output_file.write_text(markdown_text, encoding="utf-8")

            print(f"Saved: {output_file}\n")

        except Exception as error:
            print(f"Failed to convert: {file_path.name}")
            print(f"Error: {error}\n")