import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import { Pagination } from "./Pagination";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  useEffect(() => {
    let cancel;
    setLoading(true);
    axios
      .get(currentPage, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });

    return () => cancel();
  }, [currentPage]);

  if (loading) return "Loading.....";

  const goToNextPage = () => {
    setCurrentPage(nextPage);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPage);
  };

  return (
    <div className="container">
      <div className="content">
        <Pokemon pokemon={pokemon} />
        <Pagination
          goToNextPage={nextPage ? goToNextPage : null}
          goToPrevPage={prevPage ? goToPrevPage : null}
        />
      </div>
    </div>
  );
}

export default App;
