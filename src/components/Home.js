import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Achievements from './Achievements';
import ProductListing from './Listings';

const Home =()=>{

    return(
        <>
        <Profile/>
        <Achievements/>
        <ProductListing/>
        </>
    )
}
export default Home;