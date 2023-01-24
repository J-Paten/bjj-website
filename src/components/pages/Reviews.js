import React from "react";
import TopAnnoucementBar from '../TopAnnoucementBar/TopAnnoucementBar';
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar';
import ReviewMainBody from "../ReviewMainBody/ReviewMainBody";
import Footer from "../Footer/Footer";

const Reviews = () => {


    return (
        <>
            <header>
                <TopAnnoucementBar />
                <Logo />
                <Navbar />
        

            </header>
            <main>
                <ReviewMainBody />

            </main>
            <footer>
                <Footer />

            </footer>
            
        </>

    )
}

export default Reviews;