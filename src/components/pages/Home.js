import React from "react";
import TopAnnoucementBar from "../TopAnnoucementBar/TopAnnoucementBar";
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero'
import HomepageBody from '../HomepageBody/HomepageBody';
import HomepageBodyEnd from '../HomepageBodyEnd/HomepageBodyEnd'
import Footer from '../Footer/Footer';


const Home = () => {


    return (
        <>
            <header>
                <TopAnnoucementBar />
                <Logo />
                <Navbar />
                <Hero />

            </header>
            <main>
                <HomepageBody />
                <HomepageBodyEnd />

            </main>

            <footer>
                <Footer />   

            </footer>   
        </>

    )
}

export default Home;