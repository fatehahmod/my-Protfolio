import React from 'react';

const Projects = ({projectt}) => {
    console.log(projectt);
    const {img,name,b1,b2,b3,link}=projectt
    return (
        <div>
            <div className="card mb-3 mt-3 mx-auto" style={{width: "18rem"}}>
  <img style={{height:"200px"}} src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{b1}</p>
    <p class="card-text">{b2}</p>
    <p class="card-text">{b3}</p>
    <a href={link}>Live site</a>
  </div>
</div>
        </div>
    );
};

export default Projects;