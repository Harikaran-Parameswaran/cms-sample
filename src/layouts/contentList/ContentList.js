import React, { useRef, useState } from "react";
import Card from "../../components/card/Card";
import DetailsBanner from "../../components/card/detilasBanner/DetailsBanner";
import "./ContentList.css";

const ContentList = ({ title, movies }) => {
  const containerRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Scroll left on hover
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right on hover
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Handle card click to select movie
  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Close the banner
  const closeBanner = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="content-list">
      <h2 className="content-list-title">{title}</h2>
      <div className="content-list-wrapper">
        <div
          className="scroll-arrow left-arrow"
          onMouseEnter={scrollLeft}
        >
          &lt;
        </div>
        <div className="content-list-container" ref={containerRef}>
          {movies.map((movie, index) => (
            <Card
              key={index}
              image={movie.image}
              title={movie.title}
              onClick={() => handleCardClick(movie)} // Pass click handler
            />
          ))}
        </div>
        <div
          className="scroll-arrow right-arrow"
          onMouseEnter={scrollRight}
        >
          &gt;
        </div>
      </div>

      {/* Render DetailsBanner if a movie is selected */}
      {selectedMovie && (
        <DetailsBanner movie={selectedMovie} onClose={closeBanner} />
      )}
    </div>
  );
};

export default ContentList;
