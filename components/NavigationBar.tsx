'use client'

import React, {useState, useRef} from 'react';
import ReactDOM from 'react';
import '../app/animations.css';

export default function NavigationBar() {
    const [pageIndex, setPageIndex] = useState(0);
    const selectedTabRef = useRef<HTMLDivElement>(null);

    function changePage(pageName: string, newPageIndex: number) {
        console.log("Changing page to " + pageName);
        if(selectedTabRef.current) {
            selectedTabRef.current.classList.toggle('page-index-' + pageIndex);
            setPageIndex(newPageIndex);

            selectedTabRef.current.classList.toggle("page-index-" + newPageIndex);
        }
    }

    return (
        <div id="navigation-bar" className="flex flex-row items-center">
            <div id="navigation-display" className="z-[1000] relative flex rounded-full left-[9.7rem] md:left-[14.6rem] md:top-[0.05rem] bg-[#AEAEAE] w-[20.1rem] md:w-[29.9rem] h-8">
                <div ref={selectedTabRef} id="selected-tab" className="z-[1010] relative left-[-2rem] top-[0.13rem] rounded-full bg-[#3F3B3B] w-[4.9rem] md:w-24 h-7 pointer-events-none page-index-0" />
                <p className="font-[Jaldi] relative left-[-3.6rem] md:left-[-4.2rem] z-[1020] self-center">Home</p>
                <p className="font-[Jaldi] relative left-[-1.25rem] md:left-[1rem] z-[1020] self-center">Catalog</p>
                <p className="font-[Jaldi] relative left-[0.55rem] md:left-[5.7rem] z-[1020] self-center">About Us</p>
                <p className="font-[Jaldi] relative left-[2.5rem] md:left-[10.7rem] z-[1020] self-center">Events</p>
            </div>
            <div id="navigation-clickable-regions" className="flex relative left-[-10.4rem] md:left-[-15.3rem]">
                <button id="home-region" onClick={() => changePage("home", 0)} className="z-[1021] relative h-16 w-[5.025rem] md:w-[7.475rem]"/>
                <button id="catalog-region" onClick={() => changePage("catalog", 1)} className="z-[1021] relative h-16 w-[5.025rem] md:w-[7.475rem]"/>
                <button id="aboutus-region" onClick={() => changePage("aboutus", 2)} className="z-[1021] relative h-16 w-[5.025rem] md:w-[7.475rem]"/>
                <button id="events-region" onClick={() => changePage("events", 3)} className="z-[1021] relative h-16 w-[5.025rem] md:w-[7.475rem]"/>
            </div>
        </div>
    );
}

// Left offset for selected-tab options:
// left-[0.12rem] md:left-[0.1rem] Home
// left-[5.1rem] md:left-[7.85rem] Catalog
// left-[10.1rem] md:left-[15.6rem] About Us
// left-[15.1rem] md:left-[23.35rem] Events

// -14.6rem