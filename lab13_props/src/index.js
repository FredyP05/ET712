import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './comments'
// import all images
import avataruser1 from './images/business_man.png';
import avataruser2 from './images/lady.png';
import avataruser3 from './images/man.png';

const App = function(){
  return(
    <>
      <h1 style={{textAlign:"center"}}>Fredy Perez Vicente</h1>
      <section className='container'>
        <User image={avataruser1} name="Business man" date="11/12/24" msg="I am a Business man"/>
        <User image={avataruser2} name="Jessica" date="10/31/24" msg="Great job!"/>
        <User image={avataruser3} name="Peter" date="10/16/24" msg="Need more rest!"/>
      </section>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

