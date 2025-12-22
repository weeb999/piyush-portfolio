"use client";

import { useState } from "react";

const SKILLS = {
  Backend: {
    icon: "⚙️",
    items: [
      "Java",
      "Python",
      "REST APIs",
      "Object-Oriented Programming (OOP)",
      "Data Structures & Algorithms",
      "Exception Handling",
      "MVC Architecture",
    ],
  },
  Databases: {
    icon: "🗄️",
    items: [
      "MySQL",
      "SQL Queries",
      "Joins & Indexing (Basics)",
      "Schema Design",
      "Data Modeling",
    ],
  },
  Cloud: {
    icon: "☁️",
    items: [
      "AWS EC2",
      "AWS S3",
      "Cloud Deployment Concepts",
      "Scalable Backend Design",
    ],
  },
  DevOps: {
    icon: "🔁",
    items: [
      "CI/CD Basics",
      "Git & GitHub",
      "Linux Fundamentals",
      "GitHub Actions (Intro)",
    ],
  },
  Data: {
    icon: "📊",
    items: [
      "Data Analysis",
      "Excel Dashboards",
      "Pivot Tables",
      "SQL Reporting",
      "Data Cleaning",
    ],
  },
  AI: {
    icon: "🤖",
    items: [
      "AI Prompt Engineering",
      "Machine Learning Basics",
      "CNN Concepts",
      "Automation Workflows",
    ],
  },
};

const CATEGORIES = Object.keys(SKILLS);

export default function SkillsSection() {
  const [active, setActive] = useState<keyof typeof SKILLS>("Backend");

  return (
    <section id="skills" className="max-w-6xl mx-auto">
      {/* Heading */}<div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Skills</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>

      <h2 className="text-3xl font-bold mb-8 tracking-tight">
        Skills
      </h2>

      {/* Category Selector */}
      <div
  className="
    border border-gray-200 dark:border-white/10
    rounded-2xl p-6
    bg-white/80 dark:bg-[#121212]/80
    backdrop-blur
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
  "
>

        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category as keyof typeof SKILLS)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition
              ${
                active === category
                  ? "bg-emerald-500 text-white border-emerald-500"
                  : "bg-white hover:border-emerald-400"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Display */}
      <div
  className="
    border border-gray-200 dark:border-white/10
    rounded-2xl p-6
    bg-white/80 dark:bg-[#121212]/80
    backdrop-blur
    hover:shadow-xl hover:-translate-y-1
    transition-all duration-300
  "
>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-3xl">
            {SKILLS[active].icon}
          </span>
          <h3 className="text-2xl font-semibold tracking-tight">
            {active} Skills
          </h3>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS[active].items.map((skill) => (
            <li
              key={skill}
              className="px-4 py-3 border rounded-lg text-gray-700
              hover:border-emerald-400 hover:bg-emerald-50 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
