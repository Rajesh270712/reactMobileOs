import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const Without =() =>(
  React.createElement( "button" , { onClick: ()=> alert("without")},"without" )
)


const With = () => (
  <button onClick={()=>alert("with")}>
    CLICK ME!
  </button>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);
