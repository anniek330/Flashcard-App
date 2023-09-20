import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useHistory,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { readDeck, updateDeck } from "../api";
import DeckForm from "./DeckForm";

function EditDeck() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  function editDeck(updatedDeck) {
    updateDeck(updatedDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }

  function handleCancel() {
    history.goBack();
  }

  const child = deck.id ? (
    <DeckForm
      onCancel={handleCancel}
      onSubmit={editDeck}
      initialFormData={deck}
    />
  ) : (
    <p>Loading...</p>
  );

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link id="link" to={`/decks/${deckId}`}>
              {deck.name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </>
  );
}

export default EditDeck;
