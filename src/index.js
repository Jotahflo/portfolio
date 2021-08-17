import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './pages/Home';
import About from './pages/About';
import reportWebVitals from './reportWebVitals';
const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
  root
);

reportWebVitals();
