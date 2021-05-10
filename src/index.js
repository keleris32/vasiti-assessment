import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const loader = document.querySelector('.load');

const showLoader = () => loader.classList.remove('.load-hide');

const hideLoader = () => loader.classList.add('.load-hide');

ReactDOM.render(
  <React.StrictMode>
    <App hideLoader={hideLoader} showLoader={showLoader} />
  </React.StrictMode>,
  document.getElementById('root')
);
