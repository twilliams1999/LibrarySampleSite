'use client'

import { serverConnect } from "../actions/serverConnect";

export default function CatalogSearchBar() {

    return(
        <div className="relative flex w-[25rem] md:w-[50rem] h-12 justify-center rounded">
            <input type="text" className="px-3 w-[90%] h-full rounded-l-xl font-[Jaldi] text-base text-black" placeholder="Search Our Library Catalog" />
            <button onClick={async () => console.log(await serverConnect())} id="search-catalog-button" className="relative w-14 h-full rounded-r-xl bg-no-repeat bg-[center_top_50%] bg-[#BEDB1A]" style={{backgroundImage:'url("/Magnifying Glass.svg")'}}/>
        </div>
    );
}