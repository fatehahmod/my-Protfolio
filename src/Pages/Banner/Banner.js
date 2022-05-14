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
            
            <div class="content">
            </div>
            <div class="area " >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className="mx-auto">
                <div class="text-box">
                    {/* <div class="fixed-text me-3">I am a</div>
                    <div class="animate-text">
                        <div>
                            <span>Junior web Designer</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;