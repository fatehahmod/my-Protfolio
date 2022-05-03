import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import 'aos/dist/aos.css';
import  AOS from 'aos';

const Projects = ({ projectt }) => {
  useEffect(()=>{
    AOS.init({
        offset:100,
        duration:1000,
        easing: 'ease',
    })
  },[]);
  const history = useHistory();
  const handelMore = (id) => {
    history.push(`/singleDetails/${id}`)

  }
  console.log(projectt);
  const { img, name, b1, b2, b3, link, id, details } = projectt
  return (
    <div>
      <div style={{width: "18rem", borderRadius:"30px" }} className="card mb-3 mt-3 mx-auto" data-aos="fade-up">
        <img style={{ height: "200px",borderRadius:"30px" }} src={img} class="card-img-top " alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          {/* <p class="card-text">{b1}</p>
          <p class="card-text">{b2}</p>
          <p class="card-text">{b3}</p> */}
          <a href={link}><button type="button" class="btn btn-success ">Live site</button></a>
          <button onClick={() => handelMore(id)} type="button" class="btn btn-success ms-2">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;