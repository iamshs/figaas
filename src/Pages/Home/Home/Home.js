import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import Story from '../Story/Story'

const Home = () => {
    return (
        <div >
            <Navbar />
            <Banner /> 
            <Story /> 
            <Service />
        </div>
    );
};

export default Home;