import flask
from mongoengine import connect
#Possibly use mongoengine

app = flask.Flask(__name__)
app.config["DEBUG"] = True

connection = connect(
    host="mongodb+srv://schedule-simulator.ytwhhjc.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority"
)
print(connection)

#Reference: https://programminghistorian.org/en/lessons/creating-apis-with-python-and-flask

#TODO: Connect to Mongo
#TODO: Create schemas/models from diagram

@app.route("/test", methods=["GET"])
def homes():
    return "<h1>Test route</h1>"


@app.route('/', methods=["GET"])
def home(): 
    return "<h1>Global API Route</h1>" 

app.run()