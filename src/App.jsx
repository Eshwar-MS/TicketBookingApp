import "./App.css";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import MovieSlider from "./Components/MovieSlider";
import RecomendedMovies from "./Components/RecomendedMovies";
import LatestMovies from "./Components/LatestMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage";
import { Details } from "@mui/icons-material";
import TicketPage from "./Components/TicketPage";
import UpcomingMovie from "./Components/UpcomingMovies";
import EventsPage from "./Components/EventsPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <MovieSlider />
              <RecomendedMovies />
            </>
          }
        />
        <Route path="/latest-movies" element={<LatestMovies />} />
        <Route path="/movie/:id" element={<DetailsPage />} />
        <Route path="/ticket/:id" element={<TicketPage />} />
        <Route path="/upcoming-movies" element={<UpcomingMovie />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
