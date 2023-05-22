import React from 'react';
import Hero from "./Hero";
import About from "./about";
import Best from "./BestSellers";
import MainMenu from "./MainMenu";
import Interior from "./Interior";
import Visit from "./Visit";

const Main = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Best/>
            <MainMenu/>
            <Interior/>
            <Visit/>
        </>
    );
};

export default Main;