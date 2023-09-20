import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../../utils/api";
import CardList from "../Cards/CardList";

// /decks/deckId: shows deck's name and description, has a list of all the cards in deck

function Deck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ cards: [] });
  const history = useHistory();

  //get data from readDeck
  function fetchDeckData() {
    readDeck(deckId).then((data) => setDeck(data));
  }
  useEffect(fetchDeckData, [deckId]);

  //add a delete Handler for the deck then use history to return home
  function handleDelete() {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deck.id).then(() => history.push("/"));
    }
  }

  //delete a card
  function handleCardDelete(cardId) {
    const confirmed = window.confirm(
      "Delete this card?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteCard(cardId).then(fetchDeckData);
    }
  }
  return (
    <main className="container deck">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
          </li>
        </ol>
      </nav>
      <div className="media mb-2">
        <div className="media-body">
          <h5 className="mt-0">{deck.name}</h5>
          {deck.description}
        </div>
      </div>
      <Link to={`/decks/${deck.id}/edit`} className="btn btn-secondary mr-2">
        <span className="oi oi-pencil" /> Edit
      </Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mr-2">
        <span className="oi oi-book" /> Study
      </Link>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
        <span className="oi oi-plus" /> Add Cards
      </Link>
      <button className="btn btn-danger float-right">
        <span className="oi oi-trash p-1" onClick={handleDelete} />
      </button>
      <CardList deck={deck} onCardDelete={handleCardDelete} />
    </main>
  );
}

export default Deck;
