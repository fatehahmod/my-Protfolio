import React from 'react';
import Banner from './../Banner/Banner';
import About from './../About/About';
import Skils from './../Skils/Skils';
import Project from './../Project/Project';
import Contact from './../Contact/Contact';
import Service from './../Service/Service';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
      <About></About>
      <Skils></Skils>
      <Project></Project>
      <Service></Service> 
      <Contact></Contact>
        </div>
    );
};

export default Home;