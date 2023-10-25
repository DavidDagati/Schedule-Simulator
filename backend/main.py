import flask
#Possibly use mongoengine

app = flask.Flask(__name__)
app.config["DEBUG"] = True

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