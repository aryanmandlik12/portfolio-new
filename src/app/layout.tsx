import { Poppins } from 'next/font/google';
import './globals.css';
import Card from './components/card';

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
          
          
          <div className="lg:col-span-1 self-start sticky top-[7vw]">
            <Card />
          </div>

          
          <div className="lg:col-span-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}