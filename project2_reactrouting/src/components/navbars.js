import React from "react";
import { Link } from "react-router-dom";

const Navbars = function(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to='/button2' className="nav-link">iPhone</Link></li>
                    <li><Link to='/button3' className="nav-link">Android</Link></li>
                    <li><Link to='/button4' className="nav-link">Accessories</Link></li>
                </ul>
            </nav>
        </>

    )
}

export default Navbars