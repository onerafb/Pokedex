import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import Loaderinfinitescroll from "./Loaderinfinitescroll";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";
import Preloader from "./Preloader";
const Main = () => {
  //states
  const [allPokemon, setAllPokemon] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );
  const [pokedex, setpokedex] = useState("");
  const [loading, setLoading] = useState(false);
  //toggle class state
  const [ov, setov] = useState(false);
  const chooseMessage = (message) => {
    setov(message);
  };

  const getAllPokemon = async () => {
    setLoading(true);
    const res = await axios.get(loadMore);
    const data = await res.data;

    setLoadMore(data.next);
    // data.results.map(async (item, i) => {
    //   const r = await axios.get(item.url);
    //   console.log(r.data);
    // });
    const createPokemonObject = (result) => {
      result.map(async (pokemon) => {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.data;

        setAllPokemon((state) => {
          state = [...state, data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };
    setTimeout(() => {
      setLoading(false);
    }, 6000);
    createPokemonObject(data.results);

  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(loadMore);
    const data = await res.data;
    setLoadMore(data.next);
    data.results.map(async (pokemon) => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.data;

      setAllPokemon((state) => {
        state = [...state, data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
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
            <Pokeinfo data={pokedex} />
          </div>
          <div className="main-one-container">
            <div className="main-one-container-wrapper-one">
              <div className="Search-main">
                <Link to="/search" className="link">
                  Click here Search Pokemon..
                </Link>
              </div>
              <div className="main-one-container-wrapper-two">
                <div className="main-one-container-wrapper-left-section">
                  <Card
                    pokemon={allPokemon}
                    infoPokemon={(poke) => setpokedex(poke)}
                    chooseMessage={chooseMessage}
                  />
                </div>
                <div className="main-one-container-wrapper-right-section">
                  <Pokeinfo data={pokedex} />
                </div>
              </div>
            </div>
            <InfiniteScroll
              dataLength={allPokemon.length}
              next={fetchData}
              hasMore={true}
              loader={<Loaderinfinitescroll />}
            ></InfiniteScroll>
          </div>
        </>
      )}
    </div>
  );
};

export default Main;
