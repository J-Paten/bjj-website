import React from "react";
import TopAnnoucementBar from '../TopAnnoucementBar/TopAnnoucementBar';
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar';
import ScheduleMainBody from "../ScheduleMainBody/ScheduleMainBody";
import Footer from "../Footer/Footer";

const Schedule = () => {


    return (
        <>
        <header>
            <TopAnnoucementBar />
            <Logo />
            <Navbar />  


        </header>
        <main>
            <ScheduleMainBody />


        </main>
        <footer>
            <Footer />


        </footer>
    
            
        </>

    )
}

export default Schedule;