import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


function ticky(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
setInterval(ticky, 1000);
