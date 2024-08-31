"use client"
import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import CatalogSearch from "@/components/CatalogSearch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
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

      <div id="hero" className="flex flex-col bottom-0 bg-cover bg-no-repeat bg-[center_top_50%] w-[105%] h-[28rem] lg:static justify-items-center items-start" style={{backgroundImage:"url(/hero.svg)"}}>
        <div id="navigation-background" className="absolute z-[2000] bg-[rgba(203,203,203,0.51)] w-[103%] h-16 pointer-events-none" />
        <div id= "navigation-bar-container" className="relative z-[10] w-full flex justify-center">
          <NavigationBar />
        </div>
        <div id="catalog-search-container" className="relative z-[10] w-full flex justify-center top-6">
          <CatalogSearch />
        </div>
      </div>
      <div id="upcoming-events" className="flex flex-col w-full h-[50rem]">
        <div id="upcoming-events-header" className="flex w-full h-32 justify-center items-center">
          <div className="mx-3 relative w-[24%] h-[1px] bg-[#898989]" />
          <h2 className="relative text-5xl font-bold font-[Calibri] tracking-wider text-black">Upcoming Events</h2>
          <div className="mx-3 relative w-[24%] h-[1px] bg-[#898989]" />
        </div>
        <div id="upcoming-events-body" className="h-[30rem] w-full grid grid-cols-2 auto-rows-auto gap-[15rem]">
          <div id="event-book-signing" className="ml-32 w-[44.5rem] border-[#0BB598] border-2 ">
            <div id="book-signing-header" className="flex text-center mx-[2.4rem] text-black text-[22pt] font-[Habibi]">
              <h3>Book Signing for Example Book featuring John Fakeauthor</h3>
            </div>
            <div id="book-signing-body" className="flex flex-row h-[15rem]">
              <img src="/book-signing 1.png" className="ml-10 mt-5 h-[8rem]"/>
              <p className="ml-10 mr-7 mt-4 leading-7 text-[22px] font-[Calibri] text-black"><b>December 7 @ 2:00pm - 3:00pm</b><br />John Fakeauthor, author of Example Book, will be signing copies of his new stunning, smash hit on Saturday, December 7 to celebrate the release. Stop by with your copy or pick one up to get signed by John himself!</p>
            </div>
            <div id="book-signing-details" className="flex w-full h-20 items-center justify-center">
              <button className="relative md:left-16 bg-[#00939D] font-[RedHatText] tracking-[0.175em] w-32 h-10" >Details</button>
            </div>
          </div>
          <div id="event-book-signing" className="mr-32 w-[44.5rem] border-[#0BB598] border-2">
            <div id="book-signing-header" className="flex text-center mx-[2.4rem] text-black text-[22pt] font-[Habibi]">
              <h3>Book Signing for Example Book featuring John Fakeauthor</h3>
            </div>
            <div id="book-signing-body" className="flex flex-row h-[15rem]">
              <img src="/book-signing 1.png" className="ml-10 mt-5 h-[8rem]"/>
              <p className="ml-10 mr-7 mt-4 leading-7 text-[22px] font-[Calibri] text-black"><b>December 7 @ 2:00pm - 3:00pm</b><br />John Fakeauthor, author of Example Book, will be signing copies of his new stunning, smash hit on Saturday, December 7 to celebrate the release. Stop by with your copy or pick one up to get signed by John himself!</p>
            </div>
            <div id="book-signing-details" className="flex w-full h-20 items-center justify-center">
              <button className="relative md:left-16 bg-[#00939D] font-[RedHatText] tracking-[0.175em] w-32 h-10" >Details</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
