import React from "react";
import { Link } from "react-router-dom";

const Navbars = function(){
    return(
        <>
            <nav className="navbar">
                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to='/about'>Placeholder</Link></button>
                    <button><Link to='/contact'>Placeholder</Link></button>
                    <button><Link to='/button4'>Place holder</Link></button>
                </div>
            </nav>
        </>

    )
}

export default Navbars