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
import { createDeck } from "../../utils/api";
import DeckForm from "./DeckForm";

function DeckCreate() {
  const history = useHistory();

  function addDeck(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  function handleCancelClick() {
    history.push("/"); // cancel button redirects to home screen
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
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm
        onSubmit={addDeck}
        onCancel={handleCancelClick}
        initialFormData={{ name: "", description: "" }}
      />
    </div>
  );
}

export default DeckCreate;
