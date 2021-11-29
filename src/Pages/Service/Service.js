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
        
            <div className="service mb-5 mt-5">
            {
               services.map(services => <Services
               services={services}></Services>
                )
           }
        </div>
    );
};

export default Service;