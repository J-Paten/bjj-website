import React from "react";
import TopAnnoucementBar from '../TopAnnoucementBar/TopAnnoucementBar';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import ClassMainBody from '../ClassMainBody/ClassMainBody';
import Footer from '../Footer/Footer';

const Classes = () => {


    return (
        <>

        <header>
            <TopAnnoucementBar />
            <Logo />
            <Navbar />


        </header>
        <main>
          <ClassMainBody />

        </main>
        <footer>
            <Footer />


        </footer>
        
        </>

    )
}

export default Classes;