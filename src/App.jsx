import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";
import PathnotFound from "./components/PathnotFound";
import { useState } from "react";

function App() {
  const [favorites, setFavorites] = useState([]); // Shared favorites state

  // Function to add or remove favorites
  const toggleFavorite = (movie) => {
    if (favorites.some((fav) => fav.id === movie.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== movie.id)); // Remove from favorites
    } else {
      setFavorites([...favorites, movie]); // Add to favorites
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies 
                  favorites={favorites} 
                  toggleFavorite={toggleFavorite} 
                />
              </>
            }
          />

          {/* Favourites Route */}
          <Route
            path="/favourite"
            element={
              <Favourites 
                favorites={favorites} 
                toggleFavorite={toggleFavorite} 
              />
            }
          />

          {/* 404 Page Route */}
          <Route path="*" element={<PathnotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
