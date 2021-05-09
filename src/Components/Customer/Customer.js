import React from 'react';
import './Customer.css';

const Customer = (props) => {
  return (
    <div className="customer">
      <img src={props.img} alt="Satisfied Customer" />
      <h2>{props.name}</h2>
      <div className="customer-info">
        {props.location && <p className="location">{props.location}</p>}
        <p className={props.customer ? 'cus' : 'vendor'}>{props.status}</p>
      </div>
      <p className="lorem-testimony">{props.testimonial}</p>
    </div>
  );
};

export default Customer;
