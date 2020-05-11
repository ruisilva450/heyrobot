import { useState } from "react";
function Card({ word, points, onGotIt = () => {}, onDamnIt = () => {} }) {
  const [wordPoints, setPoints] = useState(points);
  return (
    <li key={word}>
      <div style={{ textAlign: "right" }}>{wordPoints}</div>
      <br />
      <br />
      <div className="text">{word}</div>
      <br />
      <br />
      <button
        onClick={() => {
          onGotIt(word, wordPoints);
        }}
      >
        Got it!
      </button>
      <button
        onClick={() => {
          setPoints(wordPoints + 1);
          onDamnIt();
        }}
      >
        Damn it!
      </button>
    </li>
  );
}
export default Card;
