import React from "react";
import './ScheduleMainBody.css';
import schedule from './images/schedule.png';

const ScheduleMainBody = () => {


    return (
        <>
            <h2 className="schedule-main-body-heading">North Country Brazillian Jiu Jitsu Training Schedule</h2>
            <img className="schedule" src={schedule} alt="schedule"></img>
           
                 <h2 className="schedule-main-body-heading">Important Notes</h2>
                 <p className="schedule-main-body-text">This schedule follows NNCS School District meaning if the school is closed due to weather, NOCOBJJ will also be closed!</p>
                 <p className="schedule-main-body-text">Schedule is subject to change in July or August!</p>
                 <p className="schedule-main-body-text">Remember the first class is by appointment only!</p>
        </>

    )
}

export default ScheduleMainBody;