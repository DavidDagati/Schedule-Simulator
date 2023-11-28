# Schedule-Simulator
COMP 4150

## Setup

### Backend env
Create a .env in root of the backend folder
set MongoUrl= to the database uri

### Virtual Environment (in python folder)
Python -m venv env
env/Scripts/Activate
pip install -r requirements.txt

Any new required packages need to be added to `requirements.txt` 

### .env
Create a .env file in the root, and add the following line
DB_URI=URI from Mongodb Atlas (with username and password)