import React, { useEffect, useState } from "react";
import one from "../assets/nopokemon.png";
import Pokeinfoloader from "./Pokeinfoloader";
const Pokeinfo = ({ data }) => {
const [loading,setLoading]=useState(false)
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  },2000)
},[data])

  return (

 <div>
 {
  loading?(
<Pokeinfoloader/>
    ):(
        <>
      {!data ? (
        <div className="pokeinfo-loading-div">
          <img src={one} alt="" className="pokeingo-loading-div-img" />
          <span className="pokeinfo-loading-text">
            Select a Pokemon <br/>to display here.
          </span>
        </div>
      ) : (
        <div className="pokeinfo-main-div">
          <img
            src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`}
            alt=""
            className="pokeinfo-img"
          />
          <h5 className="pokeinfo-num-text">{`N°${data.id}`}</h5>
          <h2 className="oc-pokemon-name">{data.name}</h2>
          <div className="pokeinfo-div-center">
            {data.types.map((item, i) => {
              return (
                <div className={`oc-pokemon-type ${item.type.name}`} key={i}>
                  {item.type.name}
                </div>
              );
            })}
          </div>
          <h4 className="pokedex-entry-text">Pokedex Entry</h4>
          <div className="pokeinfo-div-center">
            <div className="pokeinfo-h-w-div-one">
              <h4 className="pokeinfo-height-text">Height</h4>
              <div className="oc-pokemon-height">{data.height}</div>
            </div>
            <div className="pokeinfo-h-w-div-two">
              <h4 className="pokeinfo-weight-text"> Weight</h4>
              <div className="oc-pokemon-weight">{data.weight}</div>
            </div>
          </div>
          <h4 className="abilities-text">Abilities</h4>
          <div className="pokeinfo-div-center-column">
            {data.abilities.map((item, i) => {
              return (
                <div className="oc-pokemon-ability-name" key={i}>
                  {item.ability.name}
                </div>
              );
            })}
          </div>
          <h4 className="pokedex-stat-text">Stats</h4>
          <div className="pokeinfo-div-center">
            {data.stats.map((item, i) => {
              return (
                <div className="currentpokemoncontainercolumn" key={i}>
                  <div className={`oc-pokemon-stat-name ${item.stat.name}`}>
                    {item.stat.name.slice(0, 2)}
                  </div>
                  <h5 className="oc-pokemon-stat-value">{item.base_stat}</h5>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  )
 }
 </div>
  );
};

export default Pokeinfo;
