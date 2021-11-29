import React from 'react';
import { NavLink } from 'react-bootstrap';
import img from '../../imges/my-img.jpg'

import './About.css'

const About = () => {
    return (
       
        <div>
            

<div className="bg-dark container">
            
            <div className="row mt-5  mb-5">
            <div className="col-md-3">
            <h2 className="text-light">About me</h2>
                <img className="mb-3" width="250px" src={img} alt="" />

            </div>
            <div className="col-md-9 mt-5 text-light mx-auto" >
            Welcome to my profile! I am a Full Stack Web Developer, meaning that I have traning and experience and knowledge on both front end and back end of websites and applications. I am very dedicated, so I do the project management when needed. Anything to finish the project successfully! Don't waste more time, I will develop your project! Frontend development: * Javascript (react js) * CSS 3, * HTML5 * Bootstrap, MUI, * TypeScript * Photoshop, Backend development: * MongoDB * Node js • Web Design • Full Stack Web Development • Responsive Design • E-Commerce •Search Engine Optimization (SEO)

Why Choose me? 1) High quality work in a very short timeline, 2) Professional communication, 3) Unlimited revisions, 4) All source files etc. "Good service is good business." If you think that I am perfect for your project so, feel free to contact me. Thank you.
<a href="https://drive.google.com/file/d/1zzPqnKdJeYaig2F3v3AF1-COCFechXVD/view?fbclid=IwAR28IBlqlOIpaw6Aaws1dyCEEV_kzHGFBC0mK4wrta0vN5EZ3OkYm8ChDnQ"><button type="button" class="btn btn-success ms-5">My Resume</button></a>
                 
                
            </div>
        </div>
        </div>
        </div>
       
    );
};

export default About;