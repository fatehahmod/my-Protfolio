import React from 'react';

const Services = ({services}) => {
    const {name,de}=services
    return (
        <div>
            <div className="card mb-3"  >
  
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{de}</p>
    
  </div>
</div>
        </div>
    );
};

export default Services;