import React, { useState } from "react";
import PropTypes from "prop-types";

export const GameCollectionAdd = ({ setIds }) => {
  const [textInput, setTextInput] = useState(
    "Introduce el ID de un juego (ej: 1)"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let numInput = Number(textInput);
    if (!isNaN(numInput) && numInput > 0)
      setIds((ids) => [...new Set([textInput, ...ids])]);
    else window.alert("input must be a number");
    setTextInput("");
  };

  const handleInputChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          value={textInput}
          onChange={handleInputChange}
          className="form-control"
        />
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

GameCollectionAdd.propTypes = {
  setIds: PropTypes.func.isRequired,
};
