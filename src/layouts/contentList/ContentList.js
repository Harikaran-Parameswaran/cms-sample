import React, { useRef, useState } from "react";
import Card from "../../components/card/Card";
import DetailsBanner from "../../components/detailsBanner/DetailsBanner";
import "./ContentList.css";

const ContentList = ({ title, movies }) => {
  const containerRef = useRef(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right
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

  // Handle arrow key events
  const handleArrowKey = (event, direction) => {
    if (event.key === "Enter") {
      direction === "left" ? scrollLeft() : scrollRight();
    }
  };

  return (
    <div className="content-list">
      <h2 className="content-list-title">{title}</h2>
      <div className="content-list-wrapper">
        <div
          className="scroll-arrow left-arrow"
          onMouseEnter={scrollLeft}
          tabIndex="0" // Make focusable
          onKeyDown={(event) => handleArrowKey(event, "left")}
        >
          &lt;
        </div>
        <div className="content-list-container" ref={containerRef}>
          {movies.map((movie, index) => (
            <Card
              key={index}
              image={movie.image}
              title={movie.title}
              onClick={() => handleCardClick(movie)}
              tabIndex="0" // Make each card focusable
              onKeyDown={(event) => {
                if (event.key === "Enter") handleCardClick(movie); // Open DetailsBanner
              }}
            />
          ))}
        </div>
        <div
          className="scroll-arrow right-arrow"
          onMouseEnter={scrollRight}
          tabIndex="0" // Make focusable
          onKeyDown={(event) => handleArrowKey(event, "right")}
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
