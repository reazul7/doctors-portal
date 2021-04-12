import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 service-detail mb-5">
            <img src={service.img} alt=""/>
            <h5 className='mb-3 mt-3'>{service.name}</h5>
            <p className='text-secondary w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, accusantium.</p>
        </div>
    );
};

export default ServiceDetail;