import React, { useState } from "react";
import PropTypes from "prop-types";

export const GameCollectionAdd = ({ setIds }) => {
  const [textInput, setTextInput] = useState(  );

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
      <div className="input-group input-group-sm my-3">
        <input
          style={{ height: 3 + "rem", fontSize: 1.2 + "rem"}}
          type="text"
          value={textInput}
          placeholder = "Introduce el ID de un juego (ej: 1)"
          onChange={handleInputChange}
          className="form-control"
        />
        <button className="btn btn-primary" type="submit" style={{fontSize: 1.2 + "rem", width: 6 + "rem"}}>Buscar</button>
      </div>
    </form>
  );
};

GameCollectionAdd.propTypes = {
  setIds: PropTypes.func.isRequired,
};
