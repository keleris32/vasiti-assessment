import React from 'react';
import './Customers.css';
import Customer from '../Customer/Customer';
import {
  adetola,
  adunoluwa,
  amos,
  Chidi,
  chisom,
  emmanuel,
  Feyisola,
  joseph,
  karen,
  oluchi,
  promise,
  temi,
} from './customerData';

export const CustomersOne = () => {
  return (
    <div className="customers">
      <div className="wrapper">
        <Customer {...joseph} />
        <Customer {...adetola} />
        <Customer {...emmanuel} />
        <Customer {...chisom} />
        <Customer {...adunoluwa} />
        <Customer {...Chidi} />
      </div>
    </div>
  );
};

export const CustomersTwo = () => {
  return (
    <div className="customers">
      <div className="wrapper">
        <Customer {...temi} />
        <Customer {...promise} />
        <Customer {...Feyisola} />
        <Customer {...karen} />
        <Customer {...oluchi} />
        <Customer {...amos} />
      </div>
    </div>
  );
};
