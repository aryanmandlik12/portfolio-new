import { Instagram, Linkedin, Github } from "lucide-react"
import Image from 'next/image';
import "./card.css"

export default function Card() {
    return (
        <>
        <div className="flex flex-row md:flex-col items-center justify-between w-full md:max-w-[30vw] text-center gap-[1.7vw] font-[poppins] bg tracking-tight px-4 md:px-[2vw] py-[5vw] bg-white border border-neutral-900 rounded-3xl">
            <div className="relative w-[15vw] h-[15vw] md:mx-auto rounded-2xl overflow-hidden">
                <Image 
                src="/Mandlik.jpg"
                alt="Aryan Mandlik"
                fill
                className="object-cover"
                />
            </div>
            <div className=" font-extrabold text-neutral-800 text-[3vw]">
                Aryan Mandlik
            </div>
            <div className="font-medium hidden md:block text-neutral-400 text-[1vw]">
                Aspiring Software Developer who is ready to take your company to the next levels.
            </div>
            <div className="flex justify-center flex-row gap-[20px]">
                <a
                href={"https://www.instagram.com/mandlikaryan12/profilecard/?igsh=bXcyMm91NDg1OHNz"}
                >
                    <Instagram 
                    stroke={"orange"}
                   
                    className="w-[4vw] h-[4vw]"
                    />
                </a>
                {/* <a
                href={""}
                >
                    <Twitter 
                    stroke={"orange"}
                    size={40}
                    />
                </a> */}
                <a
                href={"https://www.linkedin.com/in/aryan-mandlik/"}
                >
                    <Linkedin 
                    stroke={"orange"}
                    className="w-[4vw] h-[4vw]"
                    />
                </a>
                <a
                href={"https://github.com/aryanmandlik12/"}
                >
                    <Github 
                    stroke={"orange"}
                    className="w-[4vw] h-[4vw]"
                    />
                </a>

            </div>


        </div>
        </>
    )
}