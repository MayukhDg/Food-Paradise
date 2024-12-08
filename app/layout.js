import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google'
import Context from "@/Context/GlobalContext";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
     <Context>
     <html lang="en">
      <body
        className={poppins.variable}
      >
        <Navbar/>
        {children}
      </body>
    </html>
     </Context>
      
    </ClerkProvider>
    
  );
}
