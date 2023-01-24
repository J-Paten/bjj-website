import React from "react";
import './ReviewMainBody.css';

const ReviewMainBody = () => {


    return (
        <>
            <h2 className="testimonial-heading">Reviews</h2>
            <div className="testimonial-container">
                <div className="testimonial-box">
                    <blockquote className="quote">
                         "Would highly recommend bringing kids down to learn with Spencer. My two boys and my nephew had a great first time experience with BJJ." -Facebook User
                    </blockquote>
                </div>
                <div className="testimonial-box">
                <blockquote className="quote">
                        "Great instruction, great workout, reasonable fees." -Facebook User
                    </blockquote>
                </div>
                <div className="testimonial-box">
                <blockquote className="quote">
                     "Great team of folks, with a fun atmosphere and safe environment. Kids welcome too!" -Facebook User
                    </blockquote>
                </div>
            </div>
        </>

    )
}

export default ReviewMainBody;