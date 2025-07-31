'use client'

import { useState } from "react";
import { motion } from 'framer-motion';

export default function Contact() {

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
                <div className='flex flex-col gap-[4vw] mt-[2vw]'>
          <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-black text-[7vw]  leading-[7vw]">
          LETS <br /> <span className="text-neutral-600">CONNECT</span>
          </motion.div>

      <motion.form 
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      onSubmit={handleSubmit} className="flex flex-col gap-4">
    
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
    </motion.form>
        <div>
        </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <motion.div 
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-[poppins] text-[1vw] font-medium ">
                created by  <span className="text-orange-600 font-extrabold">ARYAN MANDLIK</span> | All rights reserved
          </motion.div>
        </div>
        </>
    )
}