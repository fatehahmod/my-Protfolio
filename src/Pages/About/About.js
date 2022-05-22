import React, { useEffect } from 'react';
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
            {/* <div class="">
                <div class="snow"></div>
                
            </div> */}


            <div style={{ marginTop: "-370px" }} className="bg-light container shadow-lg rounded ">
                <div className="row mt-5  mb-5">

                    <div class="text-start col-md-6 mt-5  pt-3 rounded mx-auto shadow-sm">
                        <h2 className=''>Hello,I'm </h2>
                        <h1>FATEH AHMOD</h1>
                        <div class="text-box animate-text">
                            <span>Web Developer</span>
                        </div>
                        <div className='mb-5'>

                            <br />
                            <i class="fa fa-phone me-3"></i>
                            <a href="tel:+8801717918508">+8801717918508</a>
                            <br />
                            <i class="fa fa-envelope me-3"></i>
                            <a href="ahmod.fateh@gmail.com">ahmod.fateh@gmail.com</a>
                            <br />

                            <div className='about-icons mt-3 mb-3'>
                            <a className='bg-primary' href="https://web.facebook.com/profile.php?id=100004528784980"><i class="fa fa-facebook  "></i></a>                          

                            <a className='bg-primary' href="https://www.linkedin.com/in/fateh-ahmod-b38812218/"><i class="fa fa-linkedin"></i></a>
                          
                            </div>
                            <a className='' href="https://drive.google.com/file/d/1Hwz3ggzb__2z2IwHbflult_DVPhT-qRp/view?usp=sharing"><button type="button" className="px-3 btn btn-accent resumeBtn">My Resume</button></a>
                            

                        </div>

                    </div>
                    <div className="col-md-5">
                        <img className="my-3 rounded shadow-lg" width="450px" height="450px" src="https://i.ibb.co/FWFyPzr/118139200-1619204611573816-8889318075369350196-n.jpg" alt="" data-aos="fade-up" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default About;