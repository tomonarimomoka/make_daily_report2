import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as ReactDOM from 'react-dom';


// ReactDOM.render(
//   //厳格モード
//   <React.StrictMode> 
//   <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //厳格モード
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);
