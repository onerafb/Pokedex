import React, { useEffect, useState } from "react";
import axios from "axios";
import Searchinfo from "./Searchinfo";
import Searchcard from "./Searchcard";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
const Main = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=1252"
  );
  const [pokedex, setpokedex] = useState("");
  const [loading, setLoading] = useState(false);
  const [ov, setov] = useState(false);
  const chooseMessage = (message) => {
    setov(message);
  };

  const getAllPokemon = async () => {
 
    setLoading(true);
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10000"
    );
    const data = res.data.results;
    data.map(async (item) => {
      const resultx = await axios.get(item.url);
      setAllPokemon((state) => {
        state = [...state, resultx.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
    setTimeout(() => {
        setLoading(false);
      }, 9000);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);


  return (

    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={ov ? "overlay" : " overlay-two"}>
            <div
              className="overlay-close-bt"
              onClick={() => {
                setov(!ov);
              }}
            >
              <FaWindowClose className="close" />
            </div>
            <Searchinfo data={pokedex} />
          </div>
          <div className="main-one-container">
            <div className="main-one-container-wrapper-one">
              <div className="Search-main"></div>
              <Link to="/" className="link-home">
                Back
              </Link>

              <div className="main-one-container-wrapper-two">
                <div className="main-one-container-wrapper-left-section">
                  <Searchcard
                    pokemon={allPokemon}
                    infoPokemon={(poke) => setpokedex(poke)}
                    chooseMessage={chooseMessage}
                  />
                </div>

                <div className="main-one-container-wrapper-right-section">
                  <Searchinfo data={pokedex} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
