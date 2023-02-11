import React from "react";
import Card from './Card'


const Cards = ({characters}) =>{
    return(
        <div className="cards">
         {
          characters.map((character) => (
            <Card
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={() => window.alert("se cierra")}
            />
          ))}
        </div>
    )
}

export default Cards;