import React from 'react';
import ReactDOM from 'react-dom/client';

// import all images
import avataruser1 from './images/business_man.png';
import avataruser2 from './images/lady.png';
import avataruser3 from './images/man.png';

// import files
import './index.css';
import User from './comments'
import User_feedback from './user_feedback';

const App = function(){
  return(
    <>
      <h1 style={{textAlign:"center"}}>Fredy Perez Vicente</h1>
      <section className='container'>
        
        
      </section>

      <section className='container'>
        {/* user 1 */}
        <User_feedback username="Batman"><User image={avataruser1} date="11/12/24" msg="I am a Business man"/></User_feedback>

        {/* user 2 */}
        <User_feedback username="Jessica"><User image={avataruser2} date="10/31/24" msg="Great job!"/></User_feedback>

        {/* user 3 */}
        <User_feedback username="Peter"><User image={avataruser3} date="10/16/24" msg="Need more rest!"/></User_feedback>
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

