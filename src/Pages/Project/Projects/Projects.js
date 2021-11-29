import React from 'react';
import { useHistory } from 'react-router';

const Projects = ({projectt}) => {
  const history=useHistory();
  const handelMore=(id)=>{
    history.push(`/singleDetails/${id}`)

  }
    console.log(projectt);
    const {img,name,b1,b2,b3,link,id,details}=projectt
    return (
        <div>
            <div className="card mb-3 mt-3 mx-auto" style={{width: "18rem"}}>
  <img style={{height:"200px"}} src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{b1}</p>
    <p class="card-text">{b2}</p>
    <p class="card-text">{b3}</p>
    <a href={link}><button type="button" class="btn btn-success ">Live site</button></a>
    <button onClick={()=>handelMore(id)} type="button" class="btn btn-success ms-2">See More</button>
  </div>
</div>
        </div>
    );
};

export default Projects;