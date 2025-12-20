"use client";

import "./globals.css";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <html lang="en">
      <body className="transition-colors duration-300">
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDark(!dark)}
          className="fixed top-4 right-4 z-50 px-4 py-2 rounded-lg
          bg-gray-200 dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          shadow"
        >
          {dark ? "Light" : "Dark"}
        </button>

        {children}
      </body>
    </html>
  );
}
