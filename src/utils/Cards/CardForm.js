import React, { useState } from "react";

function CardForm({
  onSubmit,
  initialCardFormData,
  onDone,
  doneButtonLabel,
  submitButtonLabel,
}) {
  const [cardFormData, setCardFormData] = useState(initialCardFormData);

  const handleChange = ({ target }) => {
    setCardFormData({
      ...cardFormData,
      [target.name]: target.value,
    });
  };

  //handle submit button
  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
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
              required
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
              required
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
