import Card from "../components/card";
import { useState } from "react";
const words = require("../words.json");

const currentGameWords = [];
for (let i = 0; i < 16; i++) {
  const pickedIndex = Math.floor(Math.random() * words.length);
  currentGameWords.push(words[pickedIndex]);
  words.splice(pickedIndex, 1);
}

export default () => {
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);
  return (
    <div>
      <h1>Hey Robot!</h1>
      <strong>Team 1</strong> - {team1Points}
      <br />
      <strong>Team 2</strong> - {team2Points}
      <ul>
        {currentGameWords.map((w) => {
          return (
            <Card
              word={w.word}
              points={w.points}
              onGotIt={() => alert("yay")}
            />
          );
        })}
      </ul>
    </div>
  );
};
