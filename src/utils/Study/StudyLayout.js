import React from "react";
import { Link } from "react-router-dom";

function StudyLayout({ deckId, name, children }) {
  return (
    <main className="container study-page">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link id="link" to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link id="link" to={`/decks/${deckId}`}>
              {name}
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>{name}: Study</h1>
      {children}
    </main>
  );
}

export default StudyLayout;
