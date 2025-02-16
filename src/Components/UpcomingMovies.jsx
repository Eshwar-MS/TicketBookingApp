import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./UpcomingMoviesComponent.css";

function UpcomingMovie() {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    axios.get("upcomingMovies.json").then((response) => {
      setUpcoming(response.data.upcomingMovies);
      console.log(response.data.upcomingMovies);
    });
  }, []);

  return (
    <div className="container">
      {" "}
      {upcoming.map((up, index) => (
        <Card key={index} className="movie-card">
          <Card.Img variant="top" src={up.imageUrl} className="img" />

          <Card.Body>
            <Card.Title>
              <strong>{up.name}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Language :</strong> {up.language}
            </Card.Text>
            <Card.Text>
              <strong>Genre : </strong>
              {up.type}
            </Card.Text>
            <Card.Text>
              <strong>Director : </strong>
              {up.Director}
            </Card.Text>
            <Card.Text>
              <strong>Duration : </strong>
              {up.Duration}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UpcomingMovie;
