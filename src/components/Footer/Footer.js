import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";


const Footer = () => {


    return (
        <>
            <section className="footer">
                <div className="footer-social-media-section">
                    <h4 className="media-heading">Come Check Us Out On Social Media</h4>
                    <a href={'https://www.facebook.com/groups/1957245234500027'} target={'_blank'} rel="noreferrer"><i className="fa-brands fa-facebook large fa-5x"></i></a>
                </div>
                <div className="footer-nav-container">
                    <h4 className="nav-heading">Start Learning</h4>
                    <nav>
                        <ul><Link className='nav-item home-nav' to={'/bjj-website'}>Home</Link></ul>
                        <ul><Link className='nav-item home-nav' to={'/Classes'}>Classes</Link></ul>
                        <ul><Link className='nav-item home-nav' to={'/Schedule'}>Schedule</Link></ul>
                    </nav>
                    <h4 className="nav-heading">About Us</h4>
                    <nav>
                        <ul><Link className='nav-item home-nav' to={'/Instructor'}>Instructor</Link></ul>
                        <ul><Link className='nav-item home-nav' to={'/Reviews'}>Reviews</Link></ul>
                    </nav>
                </div>
                <div className="footer-design-section">
                    <p className="design-by-text">Website Designed by Jacob Patenaude</p>
                </div>
            </section>
            
        
        
        
        </>

    )
}

export default Footer;