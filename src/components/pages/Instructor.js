import React from "react";
import TopAnnoucementBar from '../TopAnnoucementBar/TopAnnoucementBar'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer";
import InstructorCarousel from "../InstructorCarousel/InstructorCarousel";
import InstructorMainBody from "../InstructorMainBody/InstructorMainBody";

const Instructor = () => {


    return (
        <>
            <header>
                <TopAnnoucementBar />
                <Logo />
                <Navbar />


            </header>
            <main>
                <InstructorCarousel />   
                <InstructorMainBody />


            </main>
            <footer>
                <Footer />


            </footer>
            
            
        </>

    )
}

export default Instructor;