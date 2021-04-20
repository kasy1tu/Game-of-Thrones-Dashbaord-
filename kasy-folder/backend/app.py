from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

df = pd.read_csv("director.csv")

app = Flask(__name__)
CORS(app)

@app.route("/directors")
def director():
    print(df)

    director = []
    ratings = []

    for i in list(df["director"]):
        director.append(i)
    
    for j in list(df["imdb_rating"]):
        ratings.append(int(j))
    
    trace1 = {
        "x": list(df["director"]),
        "y": ratings,
        "text": "It's working",
        "name": "Ratings",
        "type": "bar"
    }

    data = [trace1]

    return jsonify(data)

@app.route("/top_episodes")
def top_episodes():
    print(df)

    

if __name__ == '__main__':
    app.run()
    