import React from 'react';
import './Container.css';
import { Navbar } from '../navbar/Navbar';

const Container = () => {
    //Master layout of the app. Here, navbar, slider window and main content section are mounted

    return (
        <div className="container">
            <Navbar />
        </div>
    );
};

export default Container;
