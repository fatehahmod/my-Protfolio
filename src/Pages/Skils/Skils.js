import React from 'react';
import "./Skils.css";
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

const Skils = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h3>My Skils</h3>
            <article className="mt-5 mb-5 " >
                <Slider {...settings} >
                    <aside style={{borderRadius:"50px" }} className="icon-box shadow h-50  w-50">
                <h4 className=" logo text-danger "><AiOutlineHtml5 /></h4>
                        <h6 className="">HTML</h6>
                    </aside>
                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                 <h4 style={{color:"blue"}} className="logo"><SiCss3 /></h4>
                        <h6 className="">CSS</h6>
                    </aside>
                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                        <h4 className="logo text-warning"><SiJavascript /></h4>
                        <h6 className=" ">JavaScript</h6>
                    </aside>

                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                        <h4 className="logo text-info"><FaReact /></h4>
                        <h6 className="">React</h6>
                    </aside>
                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                        <h4 style={{color:"blue"}} className="logo"><SiBootstrap /></h4>
                        <h6 className="">Bootstrap</h6>
                    </aside>
                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                        <h4 className="logo text-success"><FaNodeJs /></h4>
                        <h6 className="">Node Js</h6>
                    </aside>
                    <aside style={{ borderRadius: "50px" }} className="icon-box shadow   w-50">
                        <h4 className="logo text-success"><SiMongodb /></h4>
                        <h6 className="">MongoDB</h6>
                    </aside>

                </Slider>
            </article>
        </div>
    );
};



export default Skils;