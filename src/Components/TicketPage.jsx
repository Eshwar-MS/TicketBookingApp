import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import QRTicket from "./QRTicket";
import "./TicketPageComponent.css";

function TicketPage() {
  const location = useLocation();
  const ticket = location.state;
  const [selectedSeats, setSelectedSeats] = useState(1);
  const [showQR, setShowQR] = useState(false);

  if (!ticket) {
    return <h2>Ticket not found</h2>;
  }

  // Function to generate booking details
  const getBookingDetails = () => ({
    movie: ticket.movie,
    date: ticket.date,
    time: ticket.availableShowTimings[0], // Default to first available time
    seats: selectedSeats,
  });

  return (
    <div className="container">
      <div className="contents">
        <h2>{ticket.movie}</h2>
        <p>
          <strong>Date:</strong> {ticket.date}
        </p>
        <p>
          <strong>Available Show Timings:</strong>
        </p>
        <ul>
          {ticket.availableShowTimings.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
        <p>
          <strong>Available seats:</strong>{" "}
          {ticket.totalSeats - ticket.bookedSeats}
        </p>

        {/* Seat Selection Dropdown */}
        <DropdownButton
          className="dropdown-basic-button"
          title={`Seats: ${selectedSeats}`}
        >
          {[...Array(10)].map((_, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => setSelectedSeats(index + 1)}
            >
              {index + 1}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <br />

        {/* Booking Button */}
        <button className="book-btn" onClick={() => setShowQR(true)}>
          Book
        </button>

        {/* Show QR Code after booking */}
        {showQR && <QRTicket bookingDetails={getBookingDetails()} />}
      </div>
    </div>
  );
}

export default TicketPage;
