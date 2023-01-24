import React from "react";
import './InstructorMainBody.css';



const InstructorMainBody = () => {


    return (
        <>
            <section className="main-body">
                <div className="main-body-container">
                <h2 className="main-body-heading">My Background</h2>
                <p className="main-body-text">{`I have been involved in martial arts nearly my entire life.  Throughout my youth, I trained Zen Do Kai Karate and earned my black belt. 
                    After relocating from the North Country to Cortland, NY, I joined team Bombsquad and began my professional mixed martial arts career at 20 years of age.  My record, 8-2 professional MMA, and I won the Untamed: Full Force Production’s lightweight title at 155lbs before moving to featherweight at 145lbs and winning that title, as well, in 2007.  In 2010, I was featured on season 12 of The Ultimate Fighter on Spike TV as a member of Team GSP Georges St. Pierre.   
                    This opportunity gave me the chance to train with some of the top mixed martial artists and BJJ instructors in the world!
                    I spent two years in Buffalo training at Buffalo BJJ before moving back upstate.   It was during this two-year period that I was exposed to authentic Brazilian Jiu Jitsu and developed the desire to exclusively train jiu jitsu.  Both the Academy and I are affiliated with Team Evolution (Headquarters in Montreal, Canada).`}</p>
                <a className="main-body-link" href="https://www.artsmartiauxevolution.com/" rel="noreferrer" target={'_blank'}>Check Out Team Evolution</a>
                <h2 className="main-body-heading">My Education</h2>
                <p className="main-body-text">
                {`Off of the mat, I graduated from SUNY Potsdam with summa cum laude honors while earning a B.A. in Biology.  I also have a master’s degree in education and im a NY state-certified science teacher. In August of 2022, I earned my black belt in jiu jitsu.  I am the first and only BJJ black belt in St. Lawrence County. 
                I'm very excited to bring jiu jitsu and kickboxing to the North Country!  But most importantly, I am eager to provide a safe environment where students can attain their goals whether it be losing 50 lbs or becoming a fighter!`}</p>
                <h2 className="main-body-heading">Check Out My Highlights!</h2>
                <iframe title="highlight-reel" width={"350"} height={"300"} src="https://www.youtube.com/embed/iQHZU4qqUcY" ></iframe>
                </div>
            </section>
        </>

    )
}

export default InstructorMainBody;