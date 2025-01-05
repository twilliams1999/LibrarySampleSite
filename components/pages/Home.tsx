import UpcomingEventCard from "../UpcomingEventCard";

export default function HomePage() {
    return (
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
    )
}