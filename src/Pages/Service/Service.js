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
        
           <div className="bg-dark container">
               <h2 className="text-light">Services</h2>
                <div className=" service mb-5 mt-5">
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