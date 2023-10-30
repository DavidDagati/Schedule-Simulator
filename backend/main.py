import flask
from mongoengine import connect
from schemas import *
import os
from dotenv import load_dotenv

app = flask.Flask(__name__)
app.config["DEBUG"] = True

load_dotenv()
DB_URI = os.getenv('DB_URI')

connection = connect(db='Staging', host=DB_URI)
print(connection)

@app.route("/test", methods=["GET"])
def homes():
    return "<h1>Test route</h1>"


@app.route('/', methods=["GET"])
def home(): 
    return "<h1>Global API Route</h1>" 

app.run()

#Reference: https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask