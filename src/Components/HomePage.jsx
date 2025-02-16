import React from "react";
import "./HomePageComponent.css";
import LatestMovies from "./LatestMovies";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="movie-sections">
      <div className="section" onClick={() => navigate("/latest-movies")}>
        Latest Movies
      </div>
      <div className="section" onClick={() => navigate("/upcoming-movies")}>
        Upcoming Movies
      </div>
      <div className="section" onClick={() => navigate("/events")}>
        Nearby Events
      </div>
    </div>
  );
}

export default HomePage;
