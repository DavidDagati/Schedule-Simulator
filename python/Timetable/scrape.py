from datetime import datetime
from clean import course_code_cleaner
import json
import pdfplumber
import requests
import re
import os
import tempfile

template_url_prefix = "https://www.uwindsor.ca/registrar/sites/uwindsor.ca.registrar/files/"
template_url_suffix = "_ugrd_timetable.pdf"

current_date = datetime.now()
current_year_str = current_date.strftime("%Y")
next_year_str = str(int(current_year_str) + 1)

seasons = ["fall_" + current_year_str, "winter_" + current_year_str, "summer_" + current_year_str,
           "fall_" + next_year_str, "winter_" + next_year_str, "summer_" + next_year_str,]

timetable_urls = {}

for term in seasons:
    timetable_urls[term] = template_url_prefix + term + template_url_suffix

for term, url in timetable_urls.items():
    response = requests.get(url)

    print(f"{term}: {response.status_code}")
    if response.status_code == 200:

        matching_dict = {}

        with tempfile.NamedTemporaryFile(delete=False) as temp_pdf:
            temp_pdf.write(response.content)
            temp_pdf_name = temp_pdf.name

        matching_values = []

        with pdfplumber.open(temp_pdf_name) as pdf:
            for page in pdf.pages:
                text = page.extract_text()

                matches = re.findall(r"COMP-[0-9]{4}[ AB]{1}|MATH-[0-9]{4}|STAT-[0-9]{4}", text)
                # matches = re.findall(r"COMP-[0-9]{4}[ AB]{1}|MATH-[0-9]{4}|STAT-[0-9]{4}|ACCT-[0-9]{4}|FINA-[0-9]{4}|MGMT-[0-9]{4}|MKTG-[0-9]{4}|MSCI-[0-9]{4}|STEN-[0-9]{4}", text)

                matching_values.extend(matches)

        matching_values = map(course_code_cleaner,matching_values)

        matching_values = list(set(matching_values))

        matching_dict[term] = matching_values

        output_json_file = "Timetable/scraped_timetable.json"

        if os.path.exists(output_json_file):
            with open(output_json_file, "r") as json_file:
                existing_data = json.load(json_file)
            existing_data[term] = matching_values
            with open(output_json_file, "w") as json_file:
                json.dump(existing_data, json_file, indent=4)
        else:
            matching_dict[term] = matching_values
            with open(output_json_file, "w") as json_file:
                json.dump(matching_dict, json_file, indent=4)

        temp_pdf.close()
