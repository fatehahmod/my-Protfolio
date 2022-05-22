import React, { useEffect } from 'react';
import "./AboutMe.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease',
        })
    }, []);
    return (

        <div className='row mt-5 secondd'>

            <div className='col-md-4 my-3 mt-5'>
                <img className="rounded shadow-lg" width="400px" height="400px" src="https://i.ibb.co/MPRfG2G/fateh2022.jpg" alt="" data-aos="fade-up" />
            </div>

            <div className='col-md-8  '>
                <p className='text-start mt-5 m-3'> <strong className='welcome-text fs-2'>Welcome to my profile! </strong>
                <br />I am a Full Stack Web Developer, meaning that I have traning and experience and knowledge on both front end and back end of websites and applications. I am very dedicated, so I do the project management when needed. Anything to finish the project successfully! Don't waste more time, I will develop your project! Frontend development: * Javascript (react js) * CSS 3, * HTML5 * Bootstrap, MUI, * TypeScript * Photoshop, Backend development: * MongoDB * Node js • Web Design • Full Stack Web Development • Responsive Design • E-Commerce •Search Engine Optimization (SEO). <br />
                <span className='choose fs-4'>Why Choose me? </span><br />
                1) High quality work in a very short timeline,
                <br />
                2) Professional communication.
                <br />
                3) Unlimited support 24/7.
                <br />
                "Good service is good business." If you think that I am perfect for your project so, feel free to contact me.
                <br /> 
                Thank you.
                    <br />
                    <div className='about-icons mt-3 mb-2'>
                        <a className='bg-primary' href="https://web.facebook.com/profile.php?id=100004528784980"><i class="fa fa-facebook  "></i></a>

                        <a className='bg-primary' href="https://www.linkedin.com/in/fateh-ahmod-b38812218/"><i class="fa fa-linkedin"></i></a>

                    </div>
                    <div>
                        <a className='' href="https://drive.google.com/file/d/1Hwz3ggzb__2z2IwHbflult_DVPhT-qRp/view?usp=sharing"><button type="button" className="btnn second">Hire me</button></a>
                    </div>

                   


                </p>
            </div>
        </div>
    );
};

export default AboutMe;