import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyLayout from "./StudyLayout";
import StudyCard from "./StudyCard";
import NotEnoughCards from "./NotEnoughCards";

function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const [cardNumber, setCardNumber] = useState(1);
  const history = useHistory();

  //fetch data from API using readDeck, re-render when deckId changes

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const cardCount = deck.cards.length; //total # of cards in deck
  const cardTitle = `Card ${cardNumber} of ${cardCount}`;
  const card = deck.cards[cardNumber - 1]; //current card bc initialState is set to 1

  const handleNext = () => {
    if (cardNumber === cardCount) {
      const returnToHomePage = !window.confirm(
        "Restart cards?\n\nClick 'cancel' to return to the home page."
      );
      return returnToHomePage ? history.push("/") : setCardNumber(1);
    }
    setCardNumber((cardNumber) => Math.min(cardCount, cardNumber + 1));
  };

  if (cardCount <= 2) {
    return (
      <StudyLayout name={deck.name} deckId={deckId}>
        <NotEnoughCards deckId={deckId} cardCount={cardCount} />
      </StudyLayout>
    );
  }

  return (
    <StudyLayout name={deck.name} deckId={deckId}>
      <StudyCard card={card} title={cardTitle}>
        <button type="button" className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      </StudyCard>
    </StudyLayout>
  );
}

export default Study;
