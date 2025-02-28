import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * Represents the top-level const of the REACT-APP.
 *
 * Using react-dom createRoot to render the App component.
 * @param {Function} render - The render function from react-dom.
 * @return {Object} App - The App component of the React-App.
 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
