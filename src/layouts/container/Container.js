import React from 'react';
import './Container.css';
import { Navbar } from '../navbar/Navbar';
import ContentList from '../contentList/ContentList';

const Container = () => {
    //Master layout of the app. Here, navbar, slider window and main content section are mounted
    const movies = [
        {
          "title": "The Godfather",
          "image": "/assets/Godfather-card.jpg",
          "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
        },
        {
          "title": "The Dark Knight",
          "image": "/assets/The-Dark-Knight-Card.jpg",
          "description": "When the menace known as The Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
        },
        {
          "title": "Inception",
          "image": "/assets/Inception-card.jpg",
          "description": "A thief who steals corporate secrets through dream-sharing technology is tasked with planting an idea into the mind of a CEO."
        },
        {
          "title": "Interstellar",
          "image": "/assets/Interstellar-card.jpg",
          "description": "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        },
        {
          "title": "The Silence of the Lambs",
          "image": "/assets/Silence-of-the-lambs-card.jpg",
          "description": "A young FBI cadet must receive the help of an incarcerated and manipulative killer to catch another serial killer."
        },
        {
          "title": "Goodfellas",
          "image": "/assets/Goodfellas-card.jpg",
          "description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife and his mob partners."
        },
        {
          "title": "Forrest Gump",
          "image": "/assets/Forrest-Gump-Card.jpg",
          "description": "The story of Forrest Gump, a man with a low IQ who accomplishes great things in his life and inspires others."
        },
        {
          "title": "The Green Mile",
          "image": "/assets/The-Green-Mile-card.jpg",
          "description": "The lives of guards on Death Row are affected by one of their charges, a man accused of child murder and rape, yet who has a mysterious gift."
        },
        {
          "title": "Fight Club",
          "image": "/assets/Fight-Club-card.jpg",
          "description": "An insomniac office worker and a soap maker form an underground fight club that evolves into something much more."
        },
        {
          "title": "The Matrix",
          "image": "/assets/The-Matrix-card.jpg",
          "description": "A hacker discovers the world he lives in is a simulated reality and is drawn into a rebellion against its controllers."
        }
      ]
      ;

      const tvChannels = [
        {
            "title": "TV 100",
            "image": "/assets/TVChannels/TV-100-card.png"
        },
        {
            "title": "Turknews",
            "image": "/assets/TVChannels/turknews-card.png"
        },
        {
            "title": "TLC",
            "image": "/assets/TVChannels/TLC-card.png"
        },
        {
            "title": "Show TV",
            "image": "/assets/TVChannels/SHow-TV-card.png"
        },
        {
            "title": "Now",
            "image": "/assets/TVChannels/Now-card.png"
        },
        {
            "title": "Cinema TV 2",
            "image": "/assets/TVChannels/Cinema-TV-2-card.png"
        },
        {
            "title": "National Geographic Wild",
            "image": "/assets/TVChannels/National-Geographic-card.png"
        },
        {
            "title": "FX",
            "image": "/assets/TVChannels/FX-card.png"
        },
        {
            "title": "Ekol TV",
            "image": "/assets/TVChannels/Ekol-TV-card.png"
        },
        {
            "title": "CNN Turk",
            "image": "/assets/TVChannels/CNN-Turk-card.png"
        },
        {
            "title": "CNN International",
            "image": "/assets/TVChannels/CNN-International-card.png"
        },
        {
            "title": "CNBC E",
            "image": "/assets/TVChannels/CNBC-E-card.png"
        },
        {
            "title": "Cinema TV",
            "image": "/assets/TVChannels/Cinema-TV-2-card.png"
        },
        {
            "title": "Cartoon Network",
            "image": "/assets/TVChannels/Cartoon-Network-card.png"
        },
      ]
    return (
        <div className="container">
            <Navbar />
            <ContentList title="Popular Movies" movies={movies} />
            <ContentList title="Top Picks for You" movies={movies} />
            <ContentList title='TV Channels' movies={tvChannels} />
        </div>
    );
};

export default Container;
