"use client";

import { useEffect, useRef, useState } from "react";
import { Sun, Moon } from "lucide-react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function TopTabs() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  const underlineRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* ---------- THEME ---------- */
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  /* ---------- SCROLL SPY ---------- */
  useEffect(() => {
    const onScroll = () => {
      let current = "home";
      tabs.forEach((tab) => {
        const el = document.getElementById(tab.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          current = tab.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- UNDERLINE ---------- */
  useEffect(() => {
    const el = tabRefs.current[active];
    const underline = underlineRef.current;

    if (el && underline) {
      underline.style.width = `${el.offsetWidth}px`;
      underline.style.transform = `translateX(${el.offsetLeft}px)`;
    }
  }, [active]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-0 w-full z-50">
      <div className="
        backdrop-blur-xl
        bg-gradient-to-r from-white/80 via-blue-50/70 to-white/80
        dark:from-gray-900/80 dark:via-gray-800/70 dark:to-gray-900/80
        border-b border-gray-200 dark:border-gray-700
        shadow-lg
      ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between relative">

            {/* TABS */}
            <nav className="relative flex gap-6 py-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  onClick={() => scrollTo(tab.id)}
                  className={`
                    text-sm font-semibold transition
                    ${
                      active === tab.id
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}

              {/* UNDERLINE */}
              <div
                ref={underlineRef}
                className="
                  absolute bottom-0 left-0 h-[3px]
                  bg-blue-600 dark:bg-blue-400
                  rounded-full transition-all duration-300
                "
              />
            </nav>

            {/* THEME TOGGLE */}
            <button
              onClick={toggleTheme}
              className="
                px-3 py-2 rounded-full
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                text-sm font-semibold
                shadow-sm hover:shadow-md transition
              "
            >
              {dark ? "☀️" : "🌙"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
