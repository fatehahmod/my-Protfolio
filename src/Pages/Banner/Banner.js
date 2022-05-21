import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"


const Banner = () => {
    return (
        <div style={{ height: "370px", width: "100vw", backgroundColor: "red" }} className="banner d-flex align-items-center gradient">
            <div class="bg">
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            </div>      
        </div>
    );
};

export default Banner;