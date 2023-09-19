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
import { createDeck } from '../../utils/api';
import DeckForm from "./DeckForm";

function DeckCreate() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
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
      <DeckForm onSubmit={submitHandler}/>
    </div>
  );
}

export default DeckCreate;
