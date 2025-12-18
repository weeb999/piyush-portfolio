"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white px-6 md:px-20">
      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Hi, I’m <span className="text-cyan-400">Piyush Gadiya</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl"
        >
          Technology Executive | IT Developer | AI & Robotics Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl text-gray-400"
        >
          I build scalable software solutions using Java, Python, and cloud
          technologies. Hands-on experience with AI, ML, robotics systems, and
          enterprise-level applications.
        </motion.p>

        <div className="flex gap-4 mt-4">
          <a href="https://linkedin.com/in/piyush-gadiya-a42225228" target="_blank">
            <Linkedin className="hover:text-cyan-400" />
          </a>
          <a href="mailto:piyushgadiya123@gmail.com">
            <Mail className="hover:text-cyan-400" />
          </a>
          <a href="https://github.com" target="_blank">
            <Github className="hover:text-cyan-400" />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am an Information Technology graduate with strong fundamentals in Core
          Java, Python, Data Structures, and Cloud Computing. Currently working as
          a Technology Executive at PHN Technology, where I combine software
          engineering with emerging technologies like robotics, AI, machine
          learning, and intelligent automation.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="py-24">
        <h2 className="text-3xl font-semibold mb-10">Experience</h2>
        <div className="space-y-6">
          <ExperienceCard
            role="Technology Executive"
            company="PHN Technology"
            points={[
              "Hands-on work with robotics, AI, and ML systems",
              "Developed humanoid robot ASTOR with voice modulation",
              "Built bionic hand mimicking live human gestures",
              "Created smart inventory application for project components",
            ]}
          />
          <ExperienceCard
            role="Core Java Developer"
            company="Uniconverge Technologies"
            points={[
              "Developed Java-based applications using OOP",
              "Implemented backend logic and database connectivity",
            ]}
          />
          <ExperienceCard
            role="Data Analyst"
            company="Next Forger"
            points={[
              "Data preprocessing and analysis",
              "Workflow monitoring and data integrity",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-24">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="ASTOR – Humanoid Robot"
            desc="Voice modulation and AI-driven interaction system"
            tech="Python, AI, Robotics"
          />
          <ProjectCard
            title="Bionic Hand"
            desc="Live gesture recognition and motion replication"
            tech="Python, Embedded Systems"
          />
          <ProjectCard
            title="Smart Inventory App"
            desc="Quickly locate sensors and project components"
            tech="Java, MySQL, Web"
          />
          <ProjectCard
            title="Skin Cancer Detection"
            desc="CNN-based medical image classification"
            tech="Python, ML, CNN"
          />
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-24 max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <p className="text-gray-300">
          Java, Python, C, MySQL, MongoDB, HTML, CSS, Node.js, AI/ML, Prompt
          Engineering, AWS, Git, Excel
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500">
        © {new Date().getFullYear()} Piyush Gadiya
      </footer>
    </main>
  );
}

function ExperienceCard({ role, company, points }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold">
        {role} – <span className="text-cyan-400">{company}</span>
      </h3>
      <ul className="list-disc list-inside text-gray-300 mt-3">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 rounded-2xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-2">{desc}</p>
      <span className="text-sm text-cyan-400">{tech}</span>
    </motion.div>
  );
}
