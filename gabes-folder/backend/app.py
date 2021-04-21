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
    # character_descriptions = ["Robb Stark was the eldest son of Ned Stark and the short-lived King of the North during the rebellion. He was killed at the Red Wedding.", "Joffrey Baratheon of House Baratheon is the Crown Prince of the Seven Kingdoms. He is the eldest of Cersei Lannister's children and heir to the Iron Throne. Vicious and cruel, he has a short temper and believes he can do anything he wants. He is also a coward when confronted by those who aren't afraid of him. Joffrey is also unaware that King Robert is not his real father – who, in reality, is Jaime Lannister. After Robert's death, the Lannisters make Joffrey the King against his father's will, and Joffrey becomes a cruel ruler and a Puppet King used by his mother.", "Balon Greyjoy is the Lord of the Iron Islands and the head of House Greyjoy of Pyke. The captain of the Great Kraken, he is a follower of the Old Way of the ironborn and desires to bring them back to prominence. In 289 AC he proclaimed their independence from the Iron Throne, but Greyjoy's Rebellion was defeated by King Robert I Baratheon's forces. Euron Greyjoy, known as Crow's Eye and Euron Crow's Eye, is a member of House Greyjoy and is the eldest of Lord Balon Greyjoy's younger brothers.", "Stannis Baratheon of House Baratheon, Lord of Dragonstone, is the elder of Robert Baratheon's younger brothers. A brooding, humorless man known for a hard and unyielding sense of justice, he is obsessed with slights real and imagined. With Robert dying, Ned sends him a letter appointing him as the legitimate heir and becomes another challenger for the Iron Throne after his alleged nephew Joffrey becomes King.", "Mance Rayder was once a man of the Night's Watch before breaking his vows and abandoning his post. He has since become extremely influential among the free folk, and is called the King-Beyond-the-Wall.", "Renly Baratheon is the Lord of Storm's End and Lord Paramount of the Stormlands. The younger brother of King Robert I and Lord Stannis, Renly serves as master of laws on Robert's small council."]
    aliases = ["King of the North", "Crown Prince of the Seven Kingdoms, Heir to the Iron Throne", "Lord of the Iron Islands/Crow's Eye", "Lord of Dragonstone", "King-Beyond-the-Wall", "Lord of Storm's End, Lord Paramount of the Stormlands"]
    relations = ["Son of Ned Stark", "Son of Cersei and Jaime Lannister", "Members of House Greyjoy of Pyke", "Robert Baratheon's younger brother", "Once a man of the Night's Watch", "Younger brother of King Robert I and Lord Stannis", ]
    attacks_texts = ["Robb Stark attacks", "Joffrey/Tommen attacks", "Greyjoy attacks", "Stannis Baratheon attacks", "Mance Rayder attacks", "Renly Baratheon attacks"]
    defenses_texts = ["Robb Stark defenses", "Joffrey/Tommen defenses", "Greyjoy defenses", "Stannis Baratheon defenses", "Mance Rayder defenses", "Renly Baratheon defenses"]

    for i in list(df["Attacks"]):
        y1.append(int(i))
    
    for j in list(df["Defenses"]):
        y2.append(int(j))
    
    trace1 = {
        "x": list(df["King"]),
        "y": y1,
        "text": attacks_texts,
        "name": "Attacks",
        "type": "bar"
    }

    trace2 = {
        "x": list(df["King"]),
        "y": y2,
        "text": defenses_texts,
        "name": "Defenses",
        "type": "bar"
    }

    data = [trace1, trace2]

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
    