'use client'
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Experience() {
    const { t } = useLanguage();
    return (
        <>
            <div className="flex flex-col gap-[5vw]">

                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.6, ease: "easeIn" }}
                        className="font-black text-[7vw] mt-16 md:mt-0 leading-[7vw]">
                        {t.activities.title}
                    </motion.div>
                </div>

                <div className="flex flex-col gap-20 md:gap-[4vw]">

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        className="flex flex-col text-left items-start">
                        <div className="font-[poppins] font-black text-xl md:text-[2vw]">
                            {t.activities.role1} <span className="font-normal text-[2vw] md:text-[1vw] text-stone-500">Jul 2025 - Jan 2025</span>
                        </div>
                        <div className="text-md md:text-[1.5vw] mt-3 text-neutral-400 font-medium">
                            {t.activities.org1}
                        </div>
                        <div>
                            <ul className="list-disc mt-4 md:mt-8 list-inside text-sm md:text-[1vw] text-neutral-300">
                                {(t.activities.bullets1 ?? []).map((bullet: string, index: number) => (
                                    <li key={`${bullet}-${index}`}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        className="flex flex-col text-left items-start">
                        <div className="font-[poppins] font-black text-xl md:text-[2vw]">
                            {t.activities.role2} <span className="font-normal text-[2vw] md:text-[1vw] text-stone-500">Jul 2025 - Jan 2025</span>
                        </div>
                        <div className="text-md md:text-[1.5vw] mt-3 text-neutral-400 font-medium">
                            {t.activities.org2}
                        </div>
                        <div>
                            <ul className="list-disc list-inside mt-4 md:mt-8 text-sm md:text-[1vw] text-neutral-300">
                                {(t.activities.bullets2 ?? []).map((bullet: string, index: number) => (
                                    <li key={`${bullet}-${index}`}>{bullet}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>

            </div>
        </>
    )

}