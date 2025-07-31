'use client';

import {motion} from "framer-motion";
import Carousel from "./components/landingpage/carousel";
import Contact from "./components/landingpage/contact";
import Projects from "./components/landingpage/projects";
import Experience from "./components/landingpage/experience";

export default function Home() {


  return (
    <>
      <div className="flex flex-col gap-[3vw] font-[poppins] tracking-tighter text-neutral-200">
        <motion.div 
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="font-black text-4xl md:text-[7vw] md:leading-[6vw]">
          SOFTWARE <br /> <span className="text-neutral-600">ENGINEER</span>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        className="text-xs md:text-[1.2vw] pr-[10vw]">
          As a CSE student with specializing in Artificial Intelligence and Machine Learning at VIT Bhopal (graduating in 2026), I am passionate about solving real-world problems through data-driven solutions.
        </motion.div>
        <motion.a
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
        href='/Aryan_Mandlik_Resume.pdf'
        download
        >
        <button className="text-[2vw] md:text-[1vw] px-5 py-2 md:px-7 md:py-3 border border-stone-600 shadow-[0_6px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.2)] bg-orange-600 rounded-full text-white">
          Download Resume
        </button>
        </motion.a>
        <Carousel />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
