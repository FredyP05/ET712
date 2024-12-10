import React from 'react'
import iphone16black from "../images/iphone16_black.webp"
import iphone16teal from "../images/iphone16_teal.webp"
import iphone16ultra from "../images/iphone16_ultramarine.webp"
import iphone16bt from "../images/iphone16bt.webp"
import iphone16dt from "../images/iphone16dt.webp"
import iphone16nt from "../images/iphone16nt.webp"

const Buttton2 = function(){
    return(
        <>
            <header>
                <h1>iPhone</h1>
            </header>
            <section className='iphone-section'>
                <img src={iphone16black}/>
                <img src={iphone16teal}/>
                <img src={iphone16ultra}/>
                <img src={iphone16bt}/>
                <img src={iphone16dt}/>
                <img src={iphone16nt}/>
            </section>
        </>
    )
}

export default Buttton2;