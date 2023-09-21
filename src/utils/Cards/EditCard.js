import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();

  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function handleSubmit(card) {
    updateCard(card).then(handleDone);
  }

  function handleDone() {
    history.push(`/decks/${deck.id}`);
  }

  const child = card.id ? (
    <CardForm
      onSubmit={handleSubmit}
      onDone={handleDone}
      initialCardFormData={card}
      doneButtonLabel="Cancel"
      submitButtonLabel="Submit"
    />
  ) : (
    <p>Loading...</p>
  );
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      {child}
    </div>
  );
}

export default EditCard;
