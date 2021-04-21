from flask import Flask, jsonify
import pandas as pd
from flask_cors import CORS
import plotly.graph_objects as go

df = pd.read_csv("director.csv")
top_epi_df = pd.read_csv("top_episodes.csv")

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

# @app.route("/top_episodes")
# def top_episodes():
#     fig = go.Figure(data=[go.Table(
#         header = dict(values=list(top_epi_df.columns), fill_color = "paleturquoise", align="left"),
#         cells=dict(values=[top_epi_df.season, top_epi_df.number_in_season], fill_color = "lavender", align="left")
#     )])

# fig.show()

# if __name__ == '__main__':
#     app.run()
    