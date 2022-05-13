import React, { useEffect } from 'react';
// import img from '../../imges/my-img.jpg'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    }, []);
    return (

        <div className=''>
            <div class="">
                <div class="snow"></div>
            </div>

            <div style={{ marginTop: "-370px" }} className="bg-light container shadow-lg rounded ">
                <div className="row mt-5  mb-5">
                    <div className="col-md-6">
                        <img className="mb-3 mt-3 rounded shadow-lg" width="470px" height="400px" src="https://i.ibb.co/yQN4gqS/photostudio-8-designify-1.png" alt="" data-aos="fade-up" />
                    </div>
                    <div  class="text-start col-md-4 mt-5  pt-3 rounded mx-auto shadow-sm">
                        <h2 className=''>Hello,I am a</h2>
                        <h1>FATEH AHMOD</h1>
                        <div class="text-box animate-text">
                            <span>Junior web Developer</span>
                        </div>
                        <div>

                            <br />
                            <i class="fa fa-phone me-3"></i>
                            <a href="tel:+8801717918508">+8801717918508</a>
                            <br />
                            <i class="fa fa-envelope me-3"></i>
                            <a href="ahmod.fateh@gmail.com">ahmod.fateh@gmail.com</a>
                            <br />


                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;