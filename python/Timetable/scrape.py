from datetime import datetime
from clean import course_code_cleaner
import json
import pdfplumber
import requests
import re
import os
import tempfile
from pymongo import MongoClient

def get_timetable_data():
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

def upload_to_mongo():

    timetable = open('Timetable/scraped_timetable.json')
    data = json.load(timetable)
    offerings = []
    for term, courses in data.items():
        for course in courses:
            offerings.append([course, term[0]])
    
    print(offerings)

    with open('mongo_conn.txt', 'r') as file:
        conn = file.read().replace('\n', '')

    mongo_client = MongoClient(conn)

    db = mongo_client.Staging
    collection = db.Courses

    for offer in offerings:
        if len(offer[0]) == 9:
            filter_criteria = {"department": offer[0][:4], "course_code": offer[0][-4:]}
        else:
            filter_criteria = {"department": offer[0][:4], "course_code": offer[0][-5:]}

        try:
            current_value = collection.find_one(filter_criteria)["term"]
            if offer[1] not in current_value:
                updated_value = current_value + offer[1]
            else:
                updated_value = current_value
            update_query = {"$set": {"term": updated_value}}

            result = collection.update_one(filter_criteria, update_query)

            if result.modified_count == 1:
                print("Update successful")
            else:
                print("No matching record found")
        except:
            print("shit didnt work")

if __name__ == "__main__":

    # get_timetable_data()
    upload_to_mongo()