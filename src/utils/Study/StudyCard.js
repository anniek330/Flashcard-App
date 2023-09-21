import React, { useEffect, useState } from "react";

function StudyCard({ card = {}, title, children }) {
  const [cardSide, setCardSide] = useState("front");
  const [flipped, setFlipped] = useState(false);

  const nextSide = {
    front: "back",
    back: "front",
  };
  function handleFlip() {
    setCardSide((prevState) => nextSide[prevState]);
    setFlipped(true);
  }

  useEffect(() => {
    setCardSide("front");
    setFlipped(false);
  }, [card]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{card[cardSide]}</p>
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={handleFlip}
        >
          Flip
        </button>
        {flipped && children}
      </div>
    </div>
  );
}

export default StudyCard;
