from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS

df = pd.read_csv("kings.csv")

app = Flask(__name__)
CORS(app)

@app.route("/api/battles")
def battles():
    print(df)

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
<<<<<<< HEAD
        "name": "Attacks",
        "type": "bar"
=======
        "name": "Attacks"
        
>>>>>>> 12ee27a3748c5c9aeb45b23a58ccf63382fd1f3f
    }

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
    