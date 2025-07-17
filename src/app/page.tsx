'use client';

import { useState } from "react";
import Image from 'next/image'
import {motion} from "framer-motion";
import { MoveUpRight } from 'lucide-react'

export default function Home() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const email = "aryanmandlik2022@vitbhopal.ac.in";
    const subject = encodeURIComponent("Let's Connect");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="flex flex-col gap-[6vw] font-[poppins] tracking-tighter text-neutral-200">
        <motion.div 
        className="font-black text-[7vw] leading-[6vw]">
          SOFTWARE <br /> <span className="text-neutral-600">ENGINEER</span>
        </motion.div>
        <div className="text-[1.7vw]">
          As a CSE student with specializing in Artificial Intelligence and Machine Learning at VIT Bhopal (graduating in 2026), I am passionate about solving real-world problems through data-driven solutions.
        </div>
        {/* <div className="flex flex-row gap-[5vw]">
          <div className="flex flex-col text-[3vw] leading-14 text-center font-extrabold">
            <div className="text-[4vw]">
              2+
            </div>
            <div className="font-medium text-neutral-600">
              Years
            </div>
          </div>

          <div className="flex flex-col text-[3vw] leading-14 text-center font-extrabold">
            <div className="text-[4vw]">
              2+
            </div>
            <div className="font-medium text-neutral-600">
              Years
            </div>
          </div>

          <div className="flex flex-col text-[3vw] leading-14 text-center font-extrabold">
            <div className="text-[4vw]">
              2+
            </div>
            <div className="font-medium text-neutral-600">
              Years
            </div>
          </div>
        </div> */}

        <div className="mt-[6vw] flex flex-col gap-[3vw] mb-[4vw]">
          <div className="font-black text-[7vw] leading-[7vw]">
          RECENT <br /> <span className="text-neutral-600">PROJECTS</span>
          </div>
          <div className="flex flex-col gap-[1vw]">

          <div className='flex flex-row items-center gap-[3vw]' >
            <div className='w-[10vw] h-[10vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
            <div className='font-bold text-[1.8vw]'>
              Crypto Price Prediction <br /> <span className='flex flex-row gap-5 mt-4 text-[0.8vw] font-light'>
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
                width = "40"
                height = "40"
                color = "orange"
                />
              </a>
          </div>

            <div className='flex flex-row items-center gap-[3vw]'>
            <div className='w-[10vw] h-[10vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
            <div className='font-bold text-[1.6vw]'>
              Face Detection <br /> <span className='flex flex-row gap-5 mt-4 text-[0.8vw] font-light'>
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
                width = "40"
                height = "40"
                color = "orange"
                />
              </a>
          </div>

          <div className='flex flex-row items-center gap-[3vw]'>
            <div className='w-[10vw] h-[10vw] rounded-2xl relative overflow-hidden'>
              <Image 
              src="/Mandlik.jpg"
              alt="SOME RANDOM ASS AI PROJECT"
              fill
              className='object-cover'
              />
            </div>
              <div className='font-bold text-[1.6vw]'>
                Player Re-identification <br /> <span className='flex flex-row gap-5 mt-4 text-[0.8vw] font-light'>
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
                width = "40"
                height = "40"
                color = "orange"
                />
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[4vw] mb-[5vw]'>
          <div className="font-black text-[7vw] leading-[7vw]">
          TECH <br /> <span className="text-neutral-600">STACK</span>
          </div>
          <div className='grid grid-cols-2 gap-[3vw]'>
            <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                Python <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>
            
                <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                Java <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>

                        <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                AWS <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>

                        <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                Tensorflow <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>

                        <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                OpenCV <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>

                        <div className='flex flex-row gap-[2vw]'>
              <div className='p-5 bg-neutral-200 rounded-xl relative overflow-hidden w-[5vw] h-[5vw]'>
                <Image 
                src="/Python.png"
                alt=""
                fill
                className='object-cover'
                />

              </div>
              <div className='font-bold text-[2vw]'>
                Scikit Learn <br /> <span className='text-[1.5vw] text-neutral-400'>Programming Language</span>
              </div>
            </div>

          </div>
        </div>

        <div className='flex flex-col gap-[4vw] mt-[2vw]'>
          <div className="font-black text-[7vw]  leading-[7vw]">
          LET'S <br /> <span className="text-neutral-600">CONNECT</span>
          </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    
    <div className="flex flex-row gap-[4vw]">
      <input
        type="text"
        placeholder="Your Name"
        className="px-8 py-2 rounded bg-neutral-500 opacity-60 text-white"
        required
      />
            <input
        type="text"
        placeholder="Your Email"
        className="px-8 py-2 rounded bg-neutral-500 opacity-60 text-white"
        required
      />

    </div>

        <div className="w-full">
                <input
        type="text"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="px-4 w-full py-[4vw] rounded bg-neutral-500 opacity-60 text-white"
        required
      />

        </div>

      <button
        type="submit"
        className="px-4 py-2 bg-orange-600 rounded text-white hover:bg-orange-700"
      >
        Send
      </button>
    </form>
        <div>
        </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <div className="font-[poppins] text-[2vw] font-medium ">
                created by  <span className="text-orange-600 font-extrabold">NIKHIL DHANDA</span> | Powered by <span className="text-orange-600 font-extrabold"  >NEXTjs</span>
          </div>
        </div>
      </div>
    </>
  );
}
