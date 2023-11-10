import React from "react";


const Card = ({ pokemon, infoPokemon, chooseMessage }) => {
  return (
    <>
      {pokemon.map((item, i) => {
        const onclick = () => {
          infoPokemon(item);
          chooseMessage(true);
        };
        return (
          <div
            className="card-container"
            key={i}
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

export default Card;
