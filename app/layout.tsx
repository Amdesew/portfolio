import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amdesew Seifu",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gray-800" lang="en">
      <body className={inter.className}>
        
        <nav className="p-4">
          <div className="text-center mx-auto">
            <div className="space-x-4">
              <a href="#skills" className="text-white hover:text-yellow-500">Skills</a>
              <a href="#portfolio" className="text-white hover:text-yellow-500">Portfolio</a>
              <a href="#contact" className="text-white hover:text-yellow-500">Contact</a>
              <a href="#about" className="text-white hover:text-yellow-500">About</a>
            </div>
          </div>
        </nav>
        
        
        {children}
        
      
      
      </body>
    </html>
  );
}
