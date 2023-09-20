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

function CardForm({ onSubmit, initialState, onDone, doneButtonLabel, submitButtonLabel }) {
  const [cardFormData, setCardFormData] = useState(initialState);

  const handleChange = ({ target }) => {
    setCardFormData({
      ...cardFormData,
      [target.name]: target.value,
    });
  };

  //handle submit button
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(cardFormData);
  }
  //create a form with two textareas for the card front and card back
  return (
    <div>
      <form onSubmit={handleSubmit} className="card-form">
        <fieldset>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              id="front"
              name="front"
              className="form-control"
              rows="3"
              value={cardFormData.front}
              required={true}
              placeholder="Front side of card"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="back">Back</label>
            <textarea
              id="back"
              name="back"
              className="form-control"
              rows="3"
              required={true}
              placeholder="Back side of card"
              value={cardFormData.back}
              onChange={handleChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={onDone}
          >
            {doneButtonLabel}
          </button>
          <button type="submit" className="btn btn-primary">
            {submitButtonLabel}
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CardForm;
