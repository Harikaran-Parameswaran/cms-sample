import React from "react";
import "./DetailsBanner.css";
import { useNavigate } from "react-router";

const DetailsBanner = ({ movie, onClose }) => {
    const navigate = useNavigate();
    return (
        <div className="details-banner">
            <button className="details-banner-close" onClick={onClose}>
                ✖
            </button>
            <img src={movie.image} alt={movie.title} className="details-banner-image" />
            <div className="details-banner-content">
                <h2 className="details-banner-title">{movie.title}</h2>
                <p className="details-banner-description">{movie.description}</p>
                <div className="banner-buttons">
                    <button className="play-button" onClick={() => navigate('/membership')}>Play</button>
                    <button className="info-button">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;
