import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Classes from './components/pages/Classes';
import Instructor from './components/pages/Instructor';
import Reviews from './components/pages/Reviews';
import Schedule from './components/pages/Schedule';

const App = () => {


    return (
        <>
        <Routes>

            <Route path='/bjj-website' element={<Home />} />
            <Route path='/Classes' element={<Classes />} />
            <Route path='/Instructor' element={<Instructor />} />
            <Route path='/Reviews' element={<Reviews />} />
            <Route path='/Schedule' element={<Schedule />} />
        </Routes>
        </>

    )
}

export default App;