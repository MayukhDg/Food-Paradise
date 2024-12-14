import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { Poppins } from 'next/font/google'
import Context from "@/Context/GlobalContext";
import { Toaster } from 'react-hot-toast';



const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: "Food Paradise",
  description: "A full stack food ordering application",
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
        <Toaster/>
      </body>
      
    </html>
     </Context>
      
    </ClerkProvider>
    
  );
}
