import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";2

import axios from "axios";

import "./MovieGrid.css";

const moviesURL = "http://localhost:3001/movies";
const topRatedURL = "http://localhost:3001/top-rated"

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    axios.get(url)
    .then(response => {
      const data = JSON.parse(JSON.stringify(response.data, null, 2));
      setTopMovies(data);
    });
  };

  useEffect(() => {
    const topRatedUrl = topRatedURL;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;