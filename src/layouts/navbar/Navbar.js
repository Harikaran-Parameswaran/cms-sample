import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { LogogSVG } from "../../SVGIcons/LogoSVG";
import { SearchSVG } from "../../SVGIcons/SearchSVG";

const banners = [
  {
    title: "Shawshank Redemption",
    description:
      "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
    image: "/assets/141121094827-01-shawshank-redemption.jpg",
  },
  {
    title: "The Godfather",
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    image: "/assets/Godfather.jpeg",
  },
  {
    title: "Inception",
    description:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into a C.E.O's mind.",
    image: "/assets/inception.jpg",
  },
];

export const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 3000); // Change every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div
      className="navbar-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navbar */}
      <div className="navbar">
        <div className="logo-container">
          <LogogSVG />
        </div>
        <div className="search-field-buttons">
          <div className="navbar-search">
            <input type="text" placeholder="Search..." />
            <div className="search-icon">
              <SearchSVG />
            </div>
          </div>
          <div className="navbar-buttons">
            <button className="member-button">Become a Member</button>
            <button className="login-button">Log In As A Member</button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="banner-slider">
        <div
          className="banner-items"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className="banner-item"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="banner-overlay">
                <div className="banner-content">
                  <h1 className="banner-title">{banner.title}</h1>
                  <p className="banner-description">{banner.description}</p>
                  <div className="banner-buttons">
                    <button className="play-button">Play</button>
                    <button className="info-button">More Info</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        {isHovered && (
          <>
            <button className="arrow left-arrow" onClick={handlePrev}>
              &lt;
            </button>
            <button className="arrow right-arrow" onClick={handleNext}>
              &gt;
            </button>
          </>
        )}

        {/* Pagination Dots */}
        {isHovered && (
          <div className="pagination">
            {banners.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};