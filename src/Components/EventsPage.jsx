import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./EventsPageComponent.css";

function EventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("events.json").then((response) => {
      setEvents(response.data.events);
    });
  }, []);

  return (
    <div className="event-container">
      {" "}
      {events.map((event, index) => (
        <Card key={index} className="event-card">
          <Card.Img variant="top" src={event.imageUrl} className="img" />

          <Card.Body>
            <Card.Title>
              <strong>{event.name}</strong>
            </Card.Title>
            <Card.Text>
              <strong>Language :</strong> {event.language}
            </Card.Text>
            <Card.Text>
              <strong>Rate : </strong>
              {event.rate}
            </Card.Text>
            <Card.Text>
              <strong>Type : </strong>
              {event.type}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default EventsPage;
