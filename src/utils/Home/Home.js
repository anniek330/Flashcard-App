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
import DeckCreate from "../Decks/DeckCreate";
import DeckList from "../Decks/DeckList";

function Home() {
  const [decks, setDecks] = useState([]);
  return (
    <div>
      {/* add a create deck button that links to (path= /decks/new) */}
     <div> 
      <Link to="/decks/new" className="btn btn-secondary mb-2">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      </div>
      <Route path="/decks/form">
        <DeckCreate />
      </Route>
      <DeckList />
    </div>
  );
}

export default Home;
