'use client'
import { motion } from 'framer-motion';

export default function Experience() {
    return(
        <>
        <div className="flex flex-col gap-[5vw]">

            <div>
                <motion.div 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeIn" }}
                className="font-black text-[7vw] leading-[7vw]">
                    EXPERIENCE
                </motion.div>
            </div>

            <div className="flex flex-col gap-[4vw]">
                
                <motion.div 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
                className="flex flex-col text-left items-start">
                    <div className="font-[poppins] font-black text-[2vw]">
                        Head Of Operations  <span className="font-normal text-[1vw] text-stone-500">Jul 2025 - Jan 2025</span>
                    </div>
                    <div className="text-[1.5vw] mt-3 text-neutral-400 font-medium">
                        Metaversity Club 
                    </div>
                    <div>
                        <ul className="list-disc mt-8 list-inside text-[1vw] text-neutral-300">
                            <li>Organized and managed events for the club.</li>
                            <li>Coordinated with team members to ensure smooth operations.</li>
                            <li>Developed strategies to increase club engagement.</li>
                        </ul>
                    </div>
                </motion.div>

                 <motion.div 
                 initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn" }}
                 className="flex flex-col text-left items-start">
                    <div className="font-[poppins] font-black text-[2vw]">
                        Event Team Lead  <span className="font-normal text-[1vw] text-stone-500">Jul 2025 - Jan 2025</span>
                    </div>
                    <div className="text-[1.5vw] mt-3 text-neutral-400 font-medium">
                        AI Club
                    </div>
                    <div>
                        <ul className="list-disc list-inside mt-8 text-[1vw] text-neutral-300">
                            <li>Organized and managed events for the club.</li>
                            <li>Coordinated with team members to ensure smooth operations.</li>
                            <li>Developed strategies to increase club engagement.</li>
                        </ul>
                    </div>
                </motion.div>

            </div>

        </div>
        </>
    )

}