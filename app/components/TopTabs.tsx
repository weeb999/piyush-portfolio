"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "skills",
  "projects",
  "experience",
  "education",
  "certificates",
  "contact",
];

export default function TopTabs() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="dark:bg-[#141414]/90
 backdrop-blur border-b border-gray-200 dark:border-white/10">
        <nav className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-2 py-4 text-sm font-medium">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 capitalize
                    ${
                      active === id
                        ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10"
                        : "text-gray-600 hover:text-emerald-600 hover:bg-gray-100 dark:hover:bg-white/10"
                    }`}
                >
                  {id}
                  {active === id && (
                    <span className="absolute left-1/2 -bottom-1 w-6 h-[2px] bg-emerald-500 -translate-x-1/2 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
