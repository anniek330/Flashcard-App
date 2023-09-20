import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import DeckView from "./DeckView";
import { listDecks, deleteDeck } from "../api";

//maps over each deck to show name and description

function DeckList() {
  const [decks, setDecks] = useState([]);

  function fetchListDecksData() {
    listDecks().then((data) => setDecks(data));
  }
  useEffect(fetchListDecksData, []);

  function handleDelete(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(fetchListDecksData);
    }
  }

  // decks.map 

  const deckList = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
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

{
  /* <DeckView  
    deleteDeck={() => deleteHandler(deck.id)} key={deck.id} deck={deck} /> */
}
