'use client'

import { Poppins } from 'next/font/google';
import './globals.css';
import Card from './components/card';
import { motion } from 'framer-motion';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="bg-[#121212]">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-[3vw] px-[9vw] py-[7vw]">
          
          
          <motion.div 
          initial={{opacity: 0, y: 20, filter: "blur(10px)"}}
          animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="md:col-span-1 self-start md:sticky top-[1.5vw]">
            <Card />
          </motion.div>

          
          <div className="lg:col-span-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}