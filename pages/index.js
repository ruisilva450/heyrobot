import Card from "../components/card";
import { useState, useEffect } from "react";
const words = require("../words.json");

export default () => {
  const [team1Points, setTeam1Points] = useState(0);
  const [team2Points, setTeam2Points] = useState(0);

  const currentGameWords = [];
  for (let i = 0; i < 16; i++) {
    const pickedIndex = Math.floor(Math.random() * words.length);
    currentGameWords.push(words[pickedIndex]);
    words.splice(pickedIndex, 1);
  }
  const [currentWords, setCurrentWords] = useState(currentGameWords);
  const [isTeam1, setIsTeam1] = useState(true);

  useEffect(() => {});
  return (
    <div>
      <h1>Hey Robot!</h1>
      <div className="scoring">
        <span className="score">
          <strong>{isTeam1 ? "☛ " : ""}Team 1</strong> - {team1Points}
        </span>
        <span className="score">
          <strong>{!isTeam1 ? "☛ " : ""}Team 2</strong> - {team2Points}
        </span>
      </div>
      <ul>
        {currentWords.map((w, i) => {
          return (
            <Card
              key={w.word}
              word={w.word}
              points={w.points}
              onGotIt={(_, points) => {
                const things = currentWords;
                things.splice(i, 1);
                console.log("things", things);
                setCurrentWords(things);

                if (isTeam1) setTeam1Points(team1Points + points);
                else setTeam2Points(team2Points + points);
                setIsTeam1(!isTeam1);
              }}
              onDamnIt={() => setIsTeam1(!isTeam1)}
            />
          );
        })}
      </ul>
    </div>
  );
};
