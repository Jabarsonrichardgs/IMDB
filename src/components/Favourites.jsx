import React, { useState } from "react";
import Pagenation from "./Pagenation";

const Favourites = ({ favorites, toggleFavorite }) => {
  const [pageNum, setPage] = useState(1);
  return (
    <div className="favorites-container p-6 mt-40 relative">
      <h2 className="text-2xl font-bold text-center mb-6">Your Favorite Movies</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">No favorite movies yet!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <div
              key={movie.id}
              className="favorite-item bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || movie.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {movie.title || movie.name}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Popularity:</strong> {movie.popularity.toFixed(2)}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Release Date:</strong> {movie.release_date || "Not Mentioned"} 
                </p>
                <button
                  className="mt-4 w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                  onClick={() => toggleFavorite(movie)}
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagenation  page={pageNum} onPrev={() => setPage(pageNum > 1 ? pageNum - 1 : 1)} onNext={() => setPage(pageNum + 1)} />
    </div>
  );
};

export default Favourites;
