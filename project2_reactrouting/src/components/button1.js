import React from 'react'
import iphone from "../images/iphone.webp";
import android from "../images/android.jpg";
import accessories from "../images/phoneaccessories.webp"
import { Link } from "react-router-dom";


const Home = function(){
    return(
        <header className='phone'>
                <h1>Explore the Latest Phones</h1>
                <p>Find your next phone and get accessories to personalize your phone.</p>
                <h2>Choose what you need!</h2>
                
                <section className="card-section">
                    <div className="card-container">

                        <div className='card'>
                            <figure>
                                <Link to="/button2"><img src={iphone} className='card-image'/></Link>  
                            </figure>
                        </div>

                        <div className='card'>
                            <figure>
                                <Link to="/button3"><img src={android} className='card-image'/></Link>     
                            </figure>
                        </div>

                        <div className='card'>
                            <Link to="/button4"><img src={accessories} className='card-image'/></Link>
                        </div>
                        
                    </div>
                </section>
                
        </header>
    )
}

export default Home;