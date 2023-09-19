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

function DeckForm({onSubmit}) {
  const emptyFormData={name:"", description:""}
  const [deck, setDeck] = useState(emptyFormData);
  const history=useHistory();

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  //handle submit button- ,preventDefault,reset form to be blank, call async onSubmit fxn 
  const handleSubmit = (event) => {
    event.preventDefault();
    setDeck({emptyFormData})
    onSubmit(deck)
    
  };
//create a form with two inputs (text and textarea) for the deck name and description
  return (
    <>
      <form onSubmit={handleSubmit} className="deck-form">
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={deck.name}
              required={true}
              placeholder="Deck Name"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              required={true}
              placeholder="Brief description of the deck."
              value={deck.description}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={()=>history.push("/")}
          >Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default DeckForm;
