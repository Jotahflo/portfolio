import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
const root = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  root
);

reportWebVitals();
