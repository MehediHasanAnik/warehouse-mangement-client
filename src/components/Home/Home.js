import React from 'react';
import Banner from "../Banner/Banner"
import Inventories from '../Inventory/Inventories';
import NewsSection from '../NewsSection/NewsSection';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories />
            <NewsSection></NewsSection>
            <Shop></Shop>
        </div>
    );
};

export default Home;