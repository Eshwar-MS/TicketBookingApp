import React from "react";
import QRCode from "react-qr-code";

const BookingQRCode = ({ bookingDetails }) => {
  if (!bookingDetails) return null; // Prevent rendering if details are missing

  return (
    <div className="qr-container">
      <h3>Booking Confirmed!</h3>
      <QRCode value={JSON.stringify(bookingDetails)} size={200} />
      <p>Scan the QR code to view booking details.</p>
    </div>
  );
};

export default BookingQRCode;
