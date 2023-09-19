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

function DeckList() {
  const [decks, setDecks] = useState([]);

  function fetchData() {
    listDecks().then((data) => setDecks(data));
  }
  useEffect(fetchData, []);

  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(fetchData);
    }
  }

  // decks.map return deckView

  const deckList = decks.map((deck) => (
    <DeckView  
    deleteDeck={() => deleteHandler(deck.id)} key={deck.id} deck={deck} />
  ));

  return deckList;
}

export default DeckList;
