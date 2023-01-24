import React from "react";
import './HomepageBody.css';



const HomepageBody = () => {


    return (
        <>
          <h2 className="body-heading">What We Are All About</h2>
           <section className="homepage-body">
                    <div className="academy-description-box">
                        <h3>What is North Country Brazilian Jiu Jitsu</h3>
                        <p>The North Country Martial Arts is a positive cultured martial arts Academy located in Norfolk, NY offering Brazilian Jiu Jitsu, mixed martial arts and kickboxing classes! We believe strongly that martial arts can change lives for the better, and we provide an atmosphere that enhances personal growth in everyone.</p>
                    </div>
                    <div className="academy-mission-box">
                        <h3>Our Mission</h3>
                        <p>We know that entering a martial arts school can be intimidating. We strive to make the process a friendly, easy and inviting one for everyone. You can set goals and reach them… there are no limits to how much you can improve!  </p>
                    </div>
                    <div className="academy-location-box">
                        <h3>Our Location</h3>
                        <p>13 West Main Street Norfolk, NY 13667</p>
                        <h2 className="time-heading">At What Time?</h2>
                        <p>5:00-7:30 pm Monday - Friday</p>
                    </div>
           </section>
           <h2 className="body-heading">Wait What If Im Not Good Enough?</h2>
           <section className="homepage-body">
            <div className="hook-container">
                <div className="hook-box">
                    <div className="inside-hook-box">
                        <h3>No Problem!</h3>
                        <p>North Country Brazillian Jiu Jitsu Academy is A dynamic workout for all skill levels.</p>
                        <h3>Remember</h3>
                        <p>Changing ones environment, even if only for a few hours a week, is the most effective way to alter behavior.</p>
                    </div>
                </div>
            </div>
            </section>
            
          

        </>

    )
}

export default HomepageBody;