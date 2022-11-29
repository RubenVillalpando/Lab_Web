import React, { useState } from "react";
import PropTypes from "prop-types";

export const AgregaGenero = ({ setGeneros }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se hizo submit...");

    if (inputValue.trim().length > 4) {
      setGeneros((generosActuales) => [inputValue, ...generosActuales]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-sm mb-3">
        <input
          style={{ height: 3 + "rem", fontSize: 1.2 + "rem" }}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Indica el Género"
          className="form-control"
        />
      </div>
    </form>
  );
};

//Configuramos los props del componente
AgregaGenero.propTypes = {
  setGeneros: PropTypes.func.isRequired,
};
