from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

df = pd.read_csv("director.csv")

app = Flask(__name__)
CORS(app)

@app.route("/directors")
def directors():
    print(df)

    directors = []
    ratings = []

    for i in list(df["director"]):
        directors.append(int(i))
    for j in list(df["imdb_rating"]):  
        directors.append(int(i))
    

    trace2 = {
        "x": list(df["King"]),
        "y": y2,
        "text": "Text about the king here?",
        "name": "Defenses",
        "type": "bar"
    }

    data = [trace1, trace2]

    return jsonify(data)

if __name__ == '__main__':
    app.run()
    