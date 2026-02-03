'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Carousel() {
  const { t } = useLanguage();
  const techStack = [
    { title: "Python" },
    { title: "Scikitlearn" },
    { title: t.carousel.ai },
    { title: "Github" },
    { title: "AWS" },
    { title: t.carousel.ml },
    { title: "Pandas" },
    { title: "Matplotlib" },
    { title: "TensorFlow" }
  ];

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="relative w-full overflow-hidden text-neutral-500 py-8 bg-[#121212]">

      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="absolute left-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-r from-[#121212] to-transparent" />
      <motion.div
        className="flex items-center"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedTechStack.map((tech: { title: string }, index: number) => (
          <motion.div key={`${tech.title}-${index}`}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="flex items-center">
            <span className="text-[3vw] font-bold uppercase tracking-wider px-8">
              {tech.title}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute right-0 top-0 bottom-0 w-55 z-10 bg-gradient-to-l from-[#121212] to-transparent" />
    </div>
  );
}