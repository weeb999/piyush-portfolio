"use client";

import "./globals.css";
import { useEffect, useState } from "react";
import FloatingContact from "./components/FloatingContact";


const tabs = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: 
{
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <html lang="en">
     <body className="bg-gray-50 text-gray-900 dark:bg-[#0f0f0f] dark:text-gray-100 transition-colors duration-300">

        {/* NAVBAR */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-white/10">
          <nav className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

            {/* Tabs */}
            <ul className="flex gap-6 text-sm font-semibold">
              {tabs.map(tab => (
                <li key={tab.id}>
                  <a
                    href={`#${tab.id}`}
                    className="text-gray-800 dark:text-gray-200 hover:text-emerald-600 transition"
                  >
                    {tab.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="px-3 py-1 rounded-md text-sm font-medium
              bg-gray-200 dark:bg-gray-800
              text-gray-900 dark:text-gray-100"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </nav>
        </header>

        {/* PAGE CONTENT */}
        <main className="pt-24">
          {children}
          <FloatingContact />
        </main>
      </body>
    </html>
  );
}
