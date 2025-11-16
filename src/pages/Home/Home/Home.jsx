import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';

const reviewsPromise  = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
    return (
        <div>
            <Banner/>
            <Section1/>
            <Section2/>
            <Brands/>
            <Reviews reviewsPromise = {reviewsPromise} />

        </div>
    );
};

export default Home;