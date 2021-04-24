from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS
from sqlalchemy import create_engine

directors_df = pd.read_csv("director.csv")
kings_df = pd.read_csv("kings.csv")

app = Flask(__name__)
CORS(app)


@app.route("/api/battles")
def battles():
    
    y1 = []
    y2 = []
    kings_list = []

    attacks_texts = ["Robb Stark attacks", "Joffrey/Tommen attacks", "Greyjoy attacks", "Stannis Baratheon attacks", "Mance Rayder attacks", "Renly Baratheon attacks"]
    defenses_texts = ["Robb Stark defenses", "Joffrey/Tommen defenses", "Greyjoy defenses", "Stannis Baratheon defenses", "Mance Rayder defenses", "Renly Baratheon defenses"]

    # for king, attacks, defenses in kings_data.fetchall():
    #     kings_list.append(str(king))
    #     y1.append(int(attacks))
    #     y2.append(int(defenses))

    for king in list(kings_df["King"]):
        kings_list.append(str(king))
    
    for i in list(kings_df["Attacks"]):
        y1.append(int(i))

    for j in list(kings_df["Defenses"]):
        y2.append(int(j))

    return jsonify([
        {
            "x": kings_list,
            "y": y1,
            "text": attacks_texts,
            "name": "Attacks",
            "type": "bar"
        },
        {
            "x": kings_list,
            "y": y2,
            "text": defenses_texts,
            "name": "Defenses",
            "type": "bar"
        }
    ])

# Ratings for directors
@app.route("/api/directors")

def director():
    print(directors_df)
    director = []
    ratings = []

    for i in list(directors_df["director"]):
        director.append(i)
    for j in list(directors_df["imdb_rating"]):
        ratings.append(j)
    trace1 = {
        "x": list(directors_df["director"]),
        "y": ratings,
        "name": "Ratings",
        "type": "bar"
    }
    data2 = [trace1]
    return jsonify(data2)

# @app.route("/top_episodes")
# def top_episodes():
#     fig = go.Figure(data=[go.Table(
#         header = dict(values=list(top_epi_df.columns), fill_color = "paleturquoise", align="left"),
#         cells=dict(values=[top_epi_df.season, top_epi_df.number_in_season], fill_color = "lavender", align="left")
#     )])

# fig.show()

if __name__ == '__main__':
    app.run()