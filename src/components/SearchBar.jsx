
import { useState } from "react";


function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div className="container-input" value={character} onChange={handleChange}>
      <input type='search' />
      <button onClick={()=> onSearch(character)}>Agregar</button> 
      </div>
   );
}

export default SearchBar