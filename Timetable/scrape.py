import pdfplumber
import re


pdf_path = "Timetable\PDFs\winter_2024_ugrd_timetable.pdf"

# Initialize a list to store matching values
matching_values = []

# Open the PDF file for text extraction
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        text = page.extract_text()
        
        # Use regex to find and extract matching values
        matches = re.findall(r"COMP-[0-9]{4}[ AB]{1}", text)
        
        # Add the matching values to the list
        matching_values.extend(matches)

# Define the output text file path
output_file = "Timetable/Output/matching_values.txt"

matching_values = set(matching_values)

# Save the matching values to a text file
with open(output_file, "w") as file:
    for value in matching_values:
        file.write(value + "\n")

print(f"Matching values saved to {output_file}")
