import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleDetails = () => {
    const {id}=useParams();
    console.log(id);
    // console.log("hello");
    const [details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('/project.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])


    const mach=details.find(a=>a.id===id)
    console.log(mach);
    return (
        <div>
            {
                 <div class="card" style={{width:"18rem"}} >
                 <img src={mach?.img} class="card-img-top" alt="..."/>
                 <div class="card-body">
                   <h5 class="card-title">{mach?.name}</h5>
                   <p class="card-text">{mach?.details}</p>
                 
                 </div>
               </div>
            }
        </div>
    );
};

export default SingleDetails;