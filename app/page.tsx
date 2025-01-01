import Image from "next/image";
import NavigationBar from "@/components/NavigationBar";
import CatalogSearch from "@/components/CatalogSearch";
import UpcomingEventCard from "@/components/UpcomingEventCard";

export default async function Home() {
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
        <div id="upcoming-events-body" className="w-full grid grid-cols-2 auto-rows-auto">
          <UpcomingEventCard isLeft
            eventid="event-book-signing"
            title="Book Signing for Example Book featuring John Fakeauthor"
            image="/book-signing 1.png"
            alt="Book Signing Event"
            datestring="December 7 @ 2:00pm - 3:00pm"
            description="John Fakeauthor, author of Example Book, will be signing copies of his new stunning, smash hit on Saturday, December 7 to celebrate the release. Stop by with your copy or pick one up to get signed by John himself!" 
          />
          <UpcomingEventCard isLeft={false}
            eventid="event-book-signing-2"
            title="Book Signing for Example Book featuring John Fakeauthor"
            image="/book-signing 1.png"
            alt="Book Signing Event"
            datestring="December 7 @ 2:00pm - 3:00pm"
            description="John Fakeauthor, author of Example Book, will be signing copies of his new stunning, smash hit on Saturday, December 7 to celebrate the release. Stop by with your copy or pick one up to get signed by John himself!" 
          />
         
        </div>
      </div>
    </main>
  );
}
