import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div >
            <Banner />
            <About />
            <Skill />
            <Contact />
        </div>
    );
};

export default Home;