import { fortunes } from "./fortuneList";
import { useState } from "react";

export default function Fortune() {
  const [selectedFortune, setSelectedFortune] = useState("");
  async function getFortune() {
    setSelectedFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
  }
  return (
    <div className="fortune-container">
      <p className="fortune-click">Click to get a fortune</p>
      <img onClick={getFortune} src="../../images/crystalBall.png" />
      {selectedFortune != null ? <p>{selectedFortune}</p> : null}
    </div>
  );
}
