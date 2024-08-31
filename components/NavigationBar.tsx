'use client'

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react';

export default function NavigationBar() {
    const pageIndexValues = ["0.1rem","7.85rem","15.6rem","23.35rem"];

    const [pageIndex, setPageIndex] = useState(0);
    const [pageTabPosition, setPageTabPosition] = useState(pageIndexValues[pageIndex]);

    useEffect(() => {
        setPageTabPosition(pageIndexValues[pageIndex]);
    }, [pageIndex])

    const navigationAnimation = {
        left: pageTabPosition
    };

    function changePage(pageName: string, newPageIndex: number) {
        console.log("Changing page to " + pageName);
        setPageIndex(newPageIndex);
    }

    return (
        <div id="navigation-bar" className="flex flex-row items-center">
            <div id="navigation-display" className="z-[1000] relative flex rounded-full left-[15.1rem] bg-[#AEAEAE] w-[20.1rem] md:w-[29.6rem] h-8">
                <div style={navigationAnimation} id="selected-tab" className="z-[1010] relative left-[0.1rem] md:left-[0.1rem] top-[0.13rem] rounded-full bg-[#3F3B3B] w-[4.9rem] md:w-24 h-7 pointer-events-none" />
                <p className="font-[Jaldi] relative left-[-3.6rem] md:left-[-4.2rem] z-[1020] self-center">Home</p>
                <p className="font-[Jaldi] relative left-[-1.2rem] md:left-[1rem] z-[1020] self-center">Catalog</p>
                <p className="font-[Jaldi] relative left-[0.5rem] md:left-[5.5rem] z-[1020] self-center">About Us</p>
                <p className="font-[Jaldi] relative left-[2.7rem] md:left-[10.2rem] z-[1020] self-center">Events</p>
            </div>
            <div id="navigation-clickable-regions" className="flex">
                <button id="home-region" onClick={() => changePage("home", 0)} className="z-[1021] md:left-[-18.4rem] relative h-16 md:w-[7.3rem]"/>
                <button id="catalog-region" onClick={() => changePage("catalog", 1)} className="z-[1021] md:left-[-18.4rem] relative h-16 md:w-[7.3rem]"/>
                <button id="aboutus-region" onClick={() => changePage("aboutus", 2)} className="z-[1021] md:left-[-18.4rem] relative h-16 md:w-[7.3rem]"/>
                <button id="events-region" onClick={() => changePage("events", 3)} className="z-[1021] md:left-[-18.4rem] relative h-16 md:w-[7.3rem]"/>
            </div>
        </div>
    );
}

// Left offset for selected-tab options:
// left-[0.1rem] md:left-[0.1rem] Home
// left-[5.1rem] md:left-[7.85rem] Catalog
// left-[10.1rem] md:left-[15.6rem] About Us
// left-[15.1rem] md:left-[23.35rem] Events