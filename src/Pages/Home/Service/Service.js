import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, img, description, price} = service
    return (
        <div className='service p-4 rounded'>
            <img width='160px' src={img} alt="" />
            <h2 className='text-primary mt-3'>{name}</h2>
            <h3>Price: ${price}</h3>
            <p>{description}</p>

        </div>
    );
};

export default Service;