import React, { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Pagenation from "./Pagenation";


const Movies = ({ favorites, toggleFavorite }) => {
  const [pageNum, setPage] = useState(1);
  const [hovered, setHovered] = useState("");
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending();
  }, [pageNum]);

  async function fetchTrending() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=d6eae9872e88cc862ad84d4aa58e74d2&page=${pageNum}`
      );
      setMovie(response.data.results);
    } catch (error) {
      console.error("Error fetching trending data:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="movie-container">
      <h1>Popular Movies</h1>
      <div className="m-list">
        {loading ? (
          <div className="loading">
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          movie.map((item, index) => (
            <div
              className="list"
              key={index}
              onMouseOver={() => setHovered(item.id)}
              onMouseLeave={() => setHovered("")}
            >
              <div className="image-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  alt={item.title || item.name}
                  onError={(e) => (e.target.src = "/fallback-image.jpg")}
                />
                {hovered === item.id && (
                  <div
                    className="emoji"
                    onClick={() => toggleFavorite(item)}
                  >
                    {favorites.some((fav) => fav.id === item.id) ? "❤️" : "🤍"}
                  </div>
                )}
              </div>
              <h3>{item.title || item.name}</h3>
            </div>
          ))
        )}
      </div>

      <Pagenation
        page={pageNum}
        onPrev={() => setPage(pageNum > 1 ? pageNum - 1 : 1)}
        onNext={() => setPage(pageNum + 1)}
      />
    </div>
  );
};

export default Movies;

