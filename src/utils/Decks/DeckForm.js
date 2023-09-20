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

function DeckForm({ onSubmit, onCancel, initialFormData }) {
  const [formData, setFormData] = useState(initialFormData);
  console.log(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //handle submit button- ,preventDefault,reset form to be blank
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  
  //create a form with two inputs (text and textarea) for the deck name and description
  return (
    <div>
      <form onSubmit={handleSubmit} className="deck-form">
        <fieldset>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              required
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
              value={formData.description}
              required
              placeholder="Brief description of the deck."
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default DeckForm;
