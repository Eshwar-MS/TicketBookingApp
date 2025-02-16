import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LatestMoviesComponent.css";
import { useNavigate } from "react-router-dom";

function LatestMovies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/Movies.json").then((response) => {
      setMovies(response.data.movies);
    });
  }, []);

  return (
    <>
      <div className="latest-Movies">
        <h3>Latest Movies</h3>
        <div className="latest-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="latest-card">
              <h4>{movie.title}</h4>
              <img src={movie.image} alt={movie.title} />
              <button
                className="book-btn"
                onClick={() => navigate(`/movie/${movie.id}`, { state: movie })}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestMovies;
