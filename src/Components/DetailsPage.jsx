import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./DetailsPageComponent.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";

function DetailsPage() {
  const location = useLocation();
  const movie = location.state;
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios.get("/ticket.json").then((response) => {
      const foundTicket = response.data.tickets.find(
        (t) => t.movie === movie.title
      );
      setTicket(foundTicket);
    });
  }, [movie]);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <>
      <Card className="d-flex flex-row align-items-center p-5">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <Card.Body className="movie-info">
          <Card.Title className="movie-name">{movie.title}</Card.Title>
          <Card.Text>
            <b>Genre:</b> {movie.genre || "N/A"}
          </Card.Text>
          <Card.Text>
            <b>Director:</b> {movie.director || "N/A"}
          </Card.Text>
          <Card.Text>
            <b>Plot:</b> {movie.plot || "N/A"}
          </Card.Text>
          <Card.Text>
            <b>Stars:</b> {movie.stars || "N/A"}
          </Card.Text>

          {ticket ? (
            <Button
              variant="primary"
              className="booking"
              onClick={() =>
                navigate(`/ticket/${ticket.id}`, { state: ticket })
              }
            >
              Book Now
            </Button>
          ) : (
            <p>No tickets available for this movie</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default DetailsPage;
