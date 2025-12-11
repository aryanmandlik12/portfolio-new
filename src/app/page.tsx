'use client';

import { motion } from "framer-motion";
import Carousel from "./components/landingpage/carousel";
import Contact from "./components/landingpage/contact";
import Projects from "./components/landingpage/projects";
import Experience from "./components/landingpage/experience";
import Internships from "./components/landingpage/Internships";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <div className="flex flex-col gap-[3vw] font-[poppins] tracking-tighter text-neutral-200">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-black text-4xl md:text-[7vw] md:leading-[6vw]">
          {t.home.role}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="text-xs md:text-[1.2vw] pr-[10vw]">
          {t.home.description}
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          href='/ARYANRESUME.pdf'
          download
        >
          <button className="text-[2vw] md:text-[1vw] px-5 py-2 md:px-7 md:py-3 border border-stone-600 shadow-[0_6px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_6px_40px_rgba(255,255,255,0.2)] bg-orange-600 rounded-full text-white">
            {t.home.downloadResume}
          </button>
        </motion.a>
        <Carousel />
        <Projects />
        <Internships />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
