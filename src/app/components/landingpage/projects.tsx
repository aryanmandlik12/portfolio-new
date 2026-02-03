'use client'

import { MoveUpRight, TrendingUp, ScanFace, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion'

import { useLanguage } from '../../context/LanguageContext';

interface Project {
  title: string;
  Icon: LucideIcon;
  link: string;
  tags: string[];
  color: string;
}

export default function Projects() {
  const { t } = useLanguage();

  const projectsData: Project[] = [
    {
      title: t.projects.p1,
      Icon: TrendingUp,
      link: "https://github.com/aryanmandlik12/Urban-Flooding-",
      tags: ["Python", "Pandas", "Numpy", "Scikit-learn", "Matplotlib", "Tensorflow"],
      color: "text-green-400"
    },
    {
      title: t.projects.p2,
      Icon: TrendingUp,
      link: "https://github.com/aryanmandlik12/CryptoPrediction",
      tags: ["Streamlit", "Pandas", "Numpy", "Yfinance", "Matplotlib", "Seaborn"],
      color: "text-green-400"
    },
    {
      title: t.projects.p3,
      Icon: ScanFace,
      link: "https://github.com/aryanmandlik12/face-detection",
      tags: ["Python", "OpenCV", "Numpy", "Matplotlib"],
      color: "text-blue-400"
    },
    {
      title: t.projects.p4,
      Icon: Users,
      link: "https://github.com/aryanmandlik12/Player-Reidentification",
      tags: ["OpenCV", "Deep SORT", "YOLOv8", "Numpy", "Matplotlib"],
      color: "text-orange-400"
    }
  ];

  return (
    <>
      <div className="mt-[6vw] flex flex-col gap-[3vw] mb-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-black text-[7vw] leading-[7vw]">
          {t.projects.titlePart1} <br /> <span className="text-neutral-600">{t.projects.titlePart2}</span>
        </motion.div>
        <div className="flex flex-col gap-[1vw]">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeIn" }}
              className='flex flex-row items-center gap-[3vw]' >
              <div className='w-20 h-20 md:w-[7vw] md:h-[7vw] rounded-2xl relative overflow-hidden bg-neutral-900 flex items-center justify-center border border-neutral-800'>
                <project.Icon
                  className={`w-10 h-10 md:w-[3.5vw] md:h-[3.5vw] ${project.color}`}
                  strokeWidth={1.5}
                />
              </div>
              <div className='font-bold text-lg mt-12 md:mt-0 md:text-[1.6vw]'>
                {project.title} <br />
                <span className='flex flex-wrap md:flex-row gap-5 mt-4 text-[2vw] md:text-[0.8vw] font-light'>
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="border border-neutral-700 rounded-full px-4 py-2 hover:bg-neutral-700 hover:text-neutral-200">
                      {tag}
                    </div>
                  ))}
                </span>
              </div>
              <a
                href={project.link}
              >
                <MoveUpRight
                  className='w-5 h-5 md:w-12 md:h-12'
                  color="orange"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}