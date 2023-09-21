import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listDecks, deleteDeck } from "../api";

//maps over each deck to show name and description with links to view and study the deck- delete btn 

function DeckList() {
  const [listOfDecks, setListOfDecks] = useState([]);

  function fetchDeckList() {
    listDecks().then((data) => setListOfDecks(data));
  }
  useEffect(fetchDeckList, []);

  function handleDelete(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(fetchDeckList);
    }
  }

  // decks.map

  const deckList = listOfDecks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h3 className="mb-6">{deck.name}</h3>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-10">{deck.description}</p>
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-3">
        <span className="oi oi-eye" /> View
      </Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
        <span className="oi oi-book" /> Study
      </Link>
      <button
        className="btn btn-danger float-right"
        onClick={() => handleDelete(deck.id)}
      >
        <span className="oi oi-trash p-1" />
      </button>
    </li>
  ));

  return <ul className="list-group mt-2 deck-list">{deckList}</ul>;
}

export default DeckList;

