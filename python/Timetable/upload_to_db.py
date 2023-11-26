import pymongo
import json
from pymongo import MongoClient, InsertOne, server_api

def upload_departments(client):
    
    db = client['Schedule-Simulator']
    collection = db['Departments']
    requesting = []

    with open(r"D:\Projects\Schedule-Simulator\python\data\depts.json") as f:
        for jsonObj in f:
            myDict = json.loads(jsonObj)
            requesting.append(InsertOne(myDict))

    result = collection.bulk_write(requesting)
    client.close()

def upload_programs(client):
    
    db = client['Schedule-Simulator']
    collection = db['Programs']
    requesting = []

    with open(r"D:\Projects\Schedule-Simulator\python\data\programs.json") as f:
        for jsonObj in f:
            myDict = json.loads(jsonObj)
            requesting.append(InsertOne(myDict))

    result = collection.bulk_write(requesting)
    client.close()

def upload_courses(client):
    
    db = client['Schedule-Simulator']
    collection = db['courses']
    requesting = []

    with open(r"D:\Projects\Schedule-Simulator\python\data\courses.json") as f:
        for jsonObj in f:
            myDict = json.loads(jsonObj)
            requesting.append(InsertOne(myDict))

    result = collection.bulk_write(requesting)
    client.close()

if __name__ == "__main__":

    uri = "mongodb+srv://schedule-simulator.ytwhhjc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
    client = MongoClient(uri,
                     tls=True,
                     tlsCertificateKeyFile='D:\Projects\Schedule-Simulator\X509-cert-886872491378304176.pem'#,
                    #  server_api=server_api('1')
                    )
    upload_departments(client)
    upload_programs(client)
    upload_courses(client)