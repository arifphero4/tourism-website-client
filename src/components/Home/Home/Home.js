import React from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Destination/>           
        </div>
    );
};

export default Home;