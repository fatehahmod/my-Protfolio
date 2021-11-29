import React from 'react';
import { NavLink } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner d-flex align-items-center ">
            <div className="mx-auto">
            <h1 className="text-light">Hello! I'm Fateh Ahmod</h1>
            <h1>Front <span className="text-primary">E</span><span className="text-success">n</span><span className="text-light">d</span> Developer</h1>
            <a href="https://drive.google.com/file/d/1zzPqnKdJeYaig2F3v3AF1-COCFechXVD/view?fbclid=IwAR28IBlqlOIpaw6Aaws1dyCEEV_kzHGFBC0mK4wrta0vN5EZ3OkYm8ChDnQ"><button type="button" class="btn btn-success ms-5">Hire Me</button></a>
           
            </div>
            
        </div>
    );
};

export default Banner;