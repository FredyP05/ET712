import React from "react";
import homepage from '../images/home.jpg';

const Home = function(){
    return(
        <>
        <h1 className="title">Welcome to React Routing by Fredy Perez Vicente</h1>
        <figure className="imgcontainer">
            <img src={homepage}/>
        </figure>
        </>


    )
}

export default Home