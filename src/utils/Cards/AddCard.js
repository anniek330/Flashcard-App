import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import { createCard, readDeck } from "../../utils/api";

function AddCard() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function newCard(card) {
    createCard(deckId, card).then(() => {
      history.go(0);
    });
  }

  function handleDone() {
    history.push(`/decks/${deckId}`);
  }

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
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Add Card
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: Add Card</h1>
      <CardForm
        deckName={deck.name}
        initialCardFormData={deck}
        onSubmit={newCard}
        onDone={handleDone}
        doneButtonLabel="Done"
        submitButtonLabel="Save"
      />
    </div>
  );
}
export default AddCard;
