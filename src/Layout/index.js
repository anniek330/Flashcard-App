import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../utils/Home/Home";
import Study from "../utils/Study/Study";
import DeckCreate from "../utils/Decks/DeckCreate";
import Deck from "../utils/Decks/Deck";
import EditDeck from "../utils/Decks/EditDeck";
import AddCard from "../utils/Cards/AddCard";
import EditCard from "../utils/Cards/EditCard";

function Layout() {
  const { url, path } = useRouteMatch();
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/new">
            <DeckCreate />
          </Route>{" "}
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>{" "}
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>{" "}
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
