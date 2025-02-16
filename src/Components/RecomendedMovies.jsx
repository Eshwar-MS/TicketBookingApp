import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RecomendedMoviesComponent.css";
import { useNavigate } from "react-router-dom";

function RecomendedMovies() {
  const [movies, setMovies] = useState([]); // Store movie data
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/Movies.json").then((response) => {
      //console.log("API Response:", response.data);
      setMovies(response.data.movies);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="recommended-movies">
      <h2>Recomended Movies</h2>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie/${movie.id}`, { state: movie })}
          >
            <img src={movie.image} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecomendedMovies;
