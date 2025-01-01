'use client'

import Image from "next/image"

export default function UpcomingEventCard({isLeft, eventid, title, image, alt, datestring, description}) {
    return (
        <div id={eventid} className={`${isLeft ? "ml-8 justify-self-start" : "mr-8 justify-self-end"} text-center flex flex-col w-[45vw] border-[#0BB598] border-2`}>
            <div className="flex text-center mx-[2.4rem] text-black text-[22pt] font-[Habibi]">
                <h3>{title}</h3>
            </div>
            <div className="min-h-[15rem]">
                    <Image 
                        src={image}
                        alt={alt}
                        height={1080}
                        width={1920}
                        className="ml-10 mt-5 mr-3 h-[8rem] w-[17rem] float-left"/>
                    <p className="text-justify ml-10 mr-7 mt-4 leading-7 text-[21px] font-[Calibri] text-black"><b>{datestring}</b><br />{description}</p>
            </div>
            <div id={`${eventid}-details`} className="flex w-full h-20 items-center justify-center">
                <button className="relative md:left-16 bg-[#00939D] font-[RedHatText] tracking-[0.175em] w-32 h-10" >Details</button>
            </div>
        </div>
    );
}