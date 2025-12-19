"use client";

import Link from "next/link";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <main className="pt-32 px-6 space-y-28">

      {/* HERO */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Piyush{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Gadiya
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Software Developer | Cloud | DevOps | AI Systems
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Technology Executive at PHN Technology with experience building
            scalable software systems that integrate cloud services,
            automation pipelines, and intelligent applications.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="#experience"
              className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Experience
            </a>

            <a
              href="#resume"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Resume
            </a>
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* EXPERIENCE */}
      <AnimatedSection>
        <section id="experience" className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

          <div className="bg-[#121212] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold">
              Technology Executive — PHN Technology
            </h3>
            <p className="text-gray-400 mb-4">2024 – Present</p>

            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>
                Designed modular backend-style software components and
                event-driven workflows for robotics and automation platforms.
              </li>
              <li>
                Integrated Python and Java services with sensor pipelines and
                real-time data processing systems.
              </li>
              <li>
                Applied data structures, clean code practices, and Git-based
                workflows in collaborative development environments.
              </li>
            </ul>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold">
              Software Developer Intern — UniConverge Technologies
            </h3>
            <p className="text-gray-400 mb-4">Aug 2024 – Sep 2024</p>

            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>
                Built Java-based backend logic integrated with SQL databases.
              </li>
              <li>
                Worked with Git, APIs, and basic cloud deployment concepts.
              </li>
            </ul>
          </div>

          <div className="bg-[#121212] p-6 rounded-xl">
            <h3 className="text-xl font-semibold">
              Data Analyst Intern — Next Forger
            </h3>
            <p className="text-gray-400 mb-4">Feb 2024 – Jun 2024</p>

            <ul className="list-disc list-inside text-gray-400 space-y-3">
              <li>
                Built Excel dashboards and analytical reports for business teams.
              </li>
              <li>
                Used AI prompting tools to generate and validate insights.
              </li>
            </ul>
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* RESUME */}
      <AnimatedSection>
        <section
          id="resume"
          className="max-w-4xl mx-auto text-center pb-24"
        >
          <h2 className="text-4xl font-bold mb-6">Resume</h2>

          <a
            href="/resume/Piyush_Gadiya_Resume.pdf"
            target="_blank"
            className="inline-block px-8 py-4 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            View / Download Resume
          </a>
        </section>
      </AnimatedSection>

    </main>
  );
}
