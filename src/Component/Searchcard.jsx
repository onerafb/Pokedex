import React,{useState} from "react";

const Searchcard = ({ pokemon, infoPokemon, chooseMessage }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className="input"
      />
     
      {pokemon.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((item, i) => {
        const onclick = () => {
          infoPokemon(item);
          chooseMessage(true);
        };
        return (
          <div
            className="card-container"
            key={i}
            // onClick={() => infoPokemon(item)}
            onClick={onclick}
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
              alt=""
              className="card-img"
            />
            <p className="card-id">N°{item.id}</p>
            <h3 className="card-name">{item.name}</h3>
            <div className="card-type-container">
              {item.types.map((item, i) => {
                return (
                  <div className={`card-type-value ${item.type.name}`} key={i}>
                    {item.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Searchcard;
