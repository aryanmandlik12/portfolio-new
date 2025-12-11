'use client'

import { useState } from "react";
import { motion } from 'framer-motion';
import { useLanguage } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

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
      <div className='flex flex-col gap-[4vw] mt-16 md:mt-[2vw]'>
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-black text-[7vw]  leading-[7vw]">
          {t.contact.titlePart1} <br /> <span className="text-neutral-600">{t.contact.titlePart2}</span>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col md:flex-row gap-[4vw]">
            <input
              type="text"
              placeholder={t.contact.placeholderName}
              className="px-8 py-2 rounded bg-neutral-500 opacity-60 text-white"
              required
            />
            <input
              type="text"
              placeholder={t.contact.placeholderEmail}
              className="px-8 py-2 rounded bg-neutral-500 opacity-60 text-white"
              required
            />

          </div>

          <div className="w-full">
            <input
              type="text"
              placeholder={t.contact.placeholderMessage}
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
            {t.contact.send}
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
          className="font-[poppins] text-xs md:text-[1vw] font-medium ">
          {t.contact.footer}
        </motion.div>
      </div>
    </>

  )
}