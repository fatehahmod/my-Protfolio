import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import "./Projects.css"

const Projects = ({ projectt }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease',
    })
  }, []);
  const history = useHistory();
  const handelMore = (id) => {
    history.push(`/singleDetails/${id}`)

  }
  console.log(projectt);
  const { img, name, link, clint,server } = projectt
  return (
    <div id='bdy'>
      <div class="wrapper">
        <div class="cardd mb-3"><img src={img} alt=""/>
          <div class="info m h ">
            <p > <button type="button" class="but px-2">{name}</button></p>
            <br />
          <a  href={link}><button type="button" class="but px-2">Live site</button></a>
          <br />
          <a  href={clint}><button type="button" class="but px-2">Clint site</button></a>
          <br />
          <a  href={server}><button type="button" class="but px-2">Server site</button></a>
          <br />
          {/* <button onClick={() => handelMore(id)} type="button" class="but ms-2">See More</button> */}
            
          </div>
        </div>
      </div>
      {/* <div style={{ width: "18rem", borderRadius: "30px" }} className="card mb-3 mt-3 mx-auto" data-aos="fade-up">
        <img style={{ height: "200px", borderRadius: "30px" }} src={img} class="card-img-top " alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>

          <a  href={link}><button type="button" class="but ">Live site</button></a>
          <button onClick={() => handelMore(id)} type="button" class="b ms-2">See More</button>
        </div>
      </div> */}
    </div>
  );
};

export default Projects;