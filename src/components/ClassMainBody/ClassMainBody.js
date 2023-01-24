import React from "react";
import './ClassMainBody.css';
import Card from 'react-bootstrap/Card';
import adultClassPhoto from './images/adult-beginner.png';
import intermediateClassPhoto from './images/intermediate-jiu-jitsu.jpeg';
import tinyChampsPhoto from './images/tiny-champs.jpeg';
import youthJiuJitsu from './images/youth-jiu-jitsu.jpeg';
import HealthBenefits from "../HealthBenefits/HealthBenefits";

const ClassMainBody = () => {


    return (
        <>
        <section className="class-main-body">
                 <Card className="card">
                    <Card.Img variant="top" src={adultClassPhoto} className="card-img" />
                     <Card.Body className="card-body">
                             <Card.Title className="card-title" >Adult Beginner Jiu Jitsu</Card.Title>
                            <Card.Text className="card-text">
                                Learn the basics over a four-week introductory course.  
                            </Card.Text>
                            <button className="btn card-btn">Get Started</button>
                     </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={tinyChampsPhoto} className="card-img" />
                     <Card.Body className="card-body">
                             <Card.Title className="card-title" >Tiny Champs Jiu Jitsu</Card.Title>
                            <Card.Text className="card-text">
                            Training disguised as games teaches basic movements and helps students develop a positive relationship with martial arts from a young age. (4-8 years of age).
                            </Card.Text>
                            <button className="btn card-btn">Get Started</button>
                     </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={youthJiuJitsu} className="card-img" />
                     <Card.Body className="card-body">
                             <Card.Title className="card-title" >Youth Jiu Jitsu</Card.Title>
                            <Card.Text className="card-text">
                              Jiu jitsu and “bully-proofing” training in a single class! (8-12 years of age).  
                            </Card.Text>
                            <button className="btn card-btn">Get Started</button>
                     </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={adultClassPhoto} className="card-img" />
                     <Card.Body className="card-body">
                             <Card.Title className="card-title" >Adult Mixed Martial Arts</Card.Title>
                            <Card.Text className="card-text">
                            Kickboxing with takedowns.  This class is for everyone, from beginners with no experience to competitors. 
                            </Card.Text>
                            <button className="btn card-btn">Get Started</button>
                     </Card.Body>
                </Card>
                <Card className="card">
                    <Card.Img variant="top" src={intermediateClassPhoto} className="card-img" />
                     <Card.Body className="card-body">
                             <Card.Title className="card-title" >Intermediate Jiu Jitsu</Card.Title>
                            <Card.Text className="card-text">
                            After completing the four-week beginner program, you’re able to join fellow members on the mat!
                            </Card.Text>
                     </Card.Body>
                </Card>
            </section>
            <HealthBenefits />
        

        
            
            
        
        
        
        </>

    )
}

export default ClassMainBody;