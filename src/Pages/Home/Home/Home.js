import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Story from '../Story/Story'

const Home = () => {
    return (
        <div >
            <Navbar />
            <Banner /> 
            <Story /> 
        </div>
    );
};

export default Home;