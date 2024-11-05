import React from 'react';
import ReactDOM from 'react-dom/client';
import mountain from './images/mountain.jpg';

// content in the app
const App = function(){
  return(
    <>
      <h1 style={{color: 'magenta', textAlign: 'center'}}>Welcome to React JS</h1>
      <h2 style={{fontFamily: 'tahoma'}}>Fredy Perez Vicente</h2>
      <figure style={{border: 'inset olive 20px'}}>
        <img src={mountain} style={{width: '100%', display: 'block'}}/>
      </figure>
    </>
  )
}

// rooting and running the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


