'use client'
import { useState } from "react";
import Image from "next/image";

import HomePage from "./Home";
import CatalogPage from "./Catalog";

import NavigationBar from "@/components/NavigationBar";
import CatalogSearchBar from "@/components/CatalogSearchBar";

export default function CurrentPage() {
    const [currentPage, setCurrentPage] = useState("home");
    const updatePage = (newPageIndex: number) => {
        switch(newPageIndex) {
            case 0: setCurrentPage("home"); break;
            case 1: setCurrentPage("catalog"); break;
            case 2: setCurrentPage("about-us"); break;
            case 3: setCurrentPage("events"); break;
            default: setCurrentPage("error"); break;
        }
    };

    let page;

    switch(currentPage) {
        case "home": page = <HomePage />; break;
        case "catalog": page = <CatalogPage />; break;
    }

    return (
    <main className="flex min-h-screen w-full overflow-hidden flex-col items-center">
        <div className="items-center justify-between font-mono text-sm lg:flex">
            <div className="bottom-0 flex h-48 w-full items-end justify-center lg:static lg:bg-none">
                <Image
                    src="/logo.png"
                    alt="Library Logo"
                    width={240}
                    height={112}
                    priority
                    />
                </div>
            </div>

            <div id="hero" className="flex flex-col bottom-0 bg-cover bg-no-repeat bg-[center_top_50%] w-full h-[28rem] lg:static justify-items-center items-start" style={{backgroundImage:"url(/hero.svg)"}}>
            <div id="navigation-background" className="absolute z-[2000] bg-[rgba(203,203,203,0.51)] w-full h-16 pointer-events-none" />
            <div id= "navigation-bar-container" className="relative z-[10] w-full flex justify-center">
                <NavigationBar updatePage={updatePage}/>
            </div>
            <div id="catalog-search-container" className="relative z-[10] w-full flex justify-center top-6">
                <CatalogSearchBar />
            </div>
        </div>
        {page}
    </main>
  );
}