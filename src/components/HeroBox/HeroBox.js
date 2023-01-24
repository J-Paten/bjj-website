import React from "react";
import './HeroBox.css';
import Button from 'react-bootstrap/Button';



const HeroBox = () => {


    return (
        <>
           <div className="container">
            <div className="inside-container">
                <h1 className="hero-heading">North Country Martial Arts Academy</h1>
                <hr  className="line-decoration"/>
                <a href="/"><Button variant="outline-dark" style={{fontSize: '4rem', }}>Get Started</Button></a>
            </div>
           </div>
            
        
        
        
        </>

    )
}

export default HeroBox;