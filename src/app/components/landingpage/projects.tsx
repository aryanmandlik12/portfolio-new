'use client'

import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion'

export default function Projects(){
    return(
        <>
        <div className="mt-[6vw] flex flex-col gap-[3vw] mb-[4vw]">
          <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-black text-[7vw] leading-[7vw]">
          RECENT <br /> <span className="text-neutral-600">PROJECTS</span>
          </motion.div>
          <div className="flex flex-col gap-[1vw]">

          <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
          className='flex flex-row items-center gap-[3vw]' >
            <div className='w-20 h-20 md:w-[7vw] md:h-[7vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
            <div className='font-bold  text-lg mt-12 md:mt-0 md:text-[1.6vw]'>
              Crypto Price Prediction <br /> <span className='flex flex-wrap md:flex-row gap-5 mt-4 text-[2vw] md:text-[0.8vw]'>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200" >
                Streamlit
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Pandas
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Numpy
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Yfinance
              </div>
              </span>
            </div>
              <a
              href="https://github.com/aryanmandlik12/CryptoPrediction"
              >
                <MoveUpRight 
                width = ""
                height = ""
                className='w-5 h-5 md:w-12 md:h-12'
                color = "orange"
                />
              </a>
          </motion.div>

            <motion.div 
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
            className='flex flex-row items-center gap-[3vw]'>
            <div className='w-20 h-20 md:w-[7vw] md:h-[7vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
            <div className='font-bold text-lg mt-12 md:mt-0 md:text-[1.6vw]'>
              Face Detection <br /> <span className='flex flex-wrap md:flex-row gap-5 mt-4 text-[2vw] md:text-[0.8vw] font-light'>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200" >
                Streamlit
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Pandas
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Numpy
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Yfinance
              </div>
              </span>
            </div>
            <a
              href="https://github.com/aryanmandlik12/face-detection"
              >
                <MoveUpRight 
                className='w-5 h-5 md:w-12 md:h-12'
                color = "orange"
                />
              </a>
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
          className='flex flex-row items-center gap-[3vw]'>
            <div className='w-20 h-20 md:w-[7vw] md:h-[7vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
              <div className='font-bold text-lg mt-12 md:mt-0 md:text-[1.6vw]'>
                Player Re-identification <br /> <span className='flex flex-wrap md:flex-row gap-5 mt-4 text-[2vw] md:text-[0.8vw] font-light'>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200" >
                Streamlit
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Pandas
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Numpy
              </div>
              <div className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                Yfinance
              </div>
              </span>
              </div>
              <a
              href="https://github.com/aryanmandlik12/Player-Reidentification"
              >
                <MoveUpRight 
                className='w-5 h-5 md:w-12 md:h-12'
                color = "orange"
                />
              </a>
            </motion.div>
          </div>
        </div>
        </>
    )
}