import React, { useEffect, useState } from 'react';
import Services from './Services/Services';
import './Service.css'

const Service = () => {
    const [services,setService]=useState([]);
    useEffect(()=>{
        fetch('/service.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        
           <div className=" container">
               <h2 className="">Services</h2>
                <div className=" service ">
            {
               services.map(services => <Services
               services={services}></Services>
                )
           }
        </div>
           </div>
    );
};

export default Service;