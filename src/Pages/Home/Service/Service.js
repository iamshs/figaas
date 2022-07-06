import React from 'react';

import Items from '../Items/Items'
import './Service.css'

const Service = () => {
    return (
        <div className='mt-10 py-20 section-bg'>
           <h2 className='text-4xl text-black  text-center font-bold'>What kind of Foods we serve for you</h2> 
           <p className='text-center mt-4'>Who are in extremely love with eco friendly system.</p>
       
           <Items />
        </div>
    );
};

export default Service;