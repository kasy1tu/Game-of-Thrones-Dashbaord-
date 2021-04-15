from flask import Flask, jsonify
from flask_cors import CORS
import pandas as pd

df = pd.read_csv("kings.csv")

app = Flask(__name__)
CORS(app)

@app.route("/api/battles")
def battles():

    y1 = []
    y2 = []

    for i in list(df["Attacks"]):
        y1.append(int(i))
    
    for j in list(df["Defenses"]):
        y2.append(int(j))
    
    trace1 = {
        "x": list(df["King"]),
        "y": y1,
        "text": "Text about the king here?",
        "name": "Attacks"
    }

    trace2 = {
        "x": list(df["King"]),
        "y": y2,
        "name": "Defenses"
    }

    data = [trace1, trace2]

    return jsonify(data)

if __name__ == '__main':
    app.run()
    