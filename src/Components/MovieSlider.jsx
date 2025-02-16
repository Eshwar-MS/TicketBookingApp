import react, { useState } from "react";
import "./MovieSliderComponent.css";
import Thor from "./Images/THOR.webp";
import WonderWoman from "./Images/WONDER-WOMEN.webp";
import StarWars from "./Images/STAR-WARS.jpg";
import DespicableMe from "./Images/DM3.jfif";
import Logan from "./Images/LOGAN.jpg";

import Carousel from "react-bootstrap/Carousel";

const movies = [
  { id: 1, title: "Thor 1", poster: Thor },
  { id: 2, title: "Wonder Women", poster: WonderWoman },
  { id: 3, title: "Star Wars", poster: StarWars },
  { id: 4, title: "Despicable Me 3", poster: DespicableMe },
  { id: 5, title: "Logan", poster: Logan },
];

function MovieSlider() {
  return (
    <div className="slider-container">
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <img
              className="carousel-img"
              src={movie.poster}
              alt={movie.title}
            />
            <Carousel.Caption>
              <h3>{movie.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <button className="arrow left" onClick={prevSlide}>
        &lt;
      </button>
      <div className="movie-slider">
        {movies.slice(index, index + itemsPerPage).map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </div>
      <button className="arrow right" onClick={nextSlide}>
        &gt;
      </button> */}
    </div>
  );
}

export default MovieSlider;
