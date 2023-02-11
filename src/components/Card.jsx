import React from "react";


function Card(props) {
  return (
    <div>
      <div className="container-data">
        <h2 className="style-text">{props.name}</h2>
        <button className="boton-x" onClick={props.onClose}>X</button>
        <img src={props.image} alt="" />
        <h2 className="style-text">{props.species}</h2>
        <h2 className="style-text">{props.gender}</h2>
      </div>
    </div>
  );
}

export default Card;
