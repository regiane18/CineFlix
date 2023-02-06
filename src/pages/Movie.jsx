import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsCalendar,
  BsTag,
} from "react-icons/bs";

import MovieCard from "../components/MovieCard";
import axios from "axios";

import "./Movie.css";

const moviesURL = "http://localhost:3001/movies";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    axios.get(url)
    .then(response => {
      const data = JSON.parse(JSON.stringify(response.data, null, 2));
      setMovie(data);
    });
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  useEffect(() => {
    const movieUrl = 'http://localhost:3001/movies/'+id;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsCalendar /> Lançamento:
            </h3>
            <p>{movie.launch}</p>
          </div>
          <div className="info">
            <h3>
              <BsTag /> Gênero:
            </h3>
            <p>{movie.genre}</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;