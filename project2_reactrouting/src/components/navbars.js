import React from "react";
import { Link } from "react-router-dom";

const Navbars = function(){
    return(
        <>
            <nav className="navbar">
                <div className="btngroup">
                    <button><Link to="/">Home</Link></button>
                    <button><Link to='/button2'>iPhone</Link></button>
                    <button><Link to='/button3'>Android</Link></button>
                    <button><Link to='/button4'>Accessories</Link></button>
                </div>
            </nav>
        </>

    )
}

export default Navbars