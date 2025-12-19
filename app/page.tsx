"use client";

import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <main className="pt-32 px-6 space-y-28">

      {/* HERO */}
      <AnimatedSection>
        <section id="home" className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            Piyush{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Gadiya
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8">
            Software Developer | Cloud | DevOps | Backend Systems
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Technology Executive at PHN Technology with experience building
            scalable backend systems, cloud-ready services, automation pipelines,
            and data-driven applications.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="#experience"
              className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              Experience
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-5xl mx-auto border-t border-white/10" />

      {/* SKILLS */}
      <AnimatedSection>
        <section id="skills" className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-[#121212]">
                <tr>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Technologies</th>
                  <th className="px-6 py-4 text-left">Level</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/10 text-gray-400">
                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Backend Development</td>
                  <td className="px-6 py-4">
                    Java, Python, REST APIs, OOP, Data Structures
                  </td>
                  <td className="px-6 py-4 text-green-400">Strong</td>
                </tr>

                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Databases</td>
                  <td className="px-6 py-4">
                    MySQL, SQL Queries, Data Modeling
                  </td>
                  <td className="px-6 py-4 text-green-400">Strong</td>
                </tr>

                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Cloud & DevOps</td>
                  <td className="px-6 py-4">
                    AWS (EC2, S3), CI/CD Basics, Linux, GitHub Actions (Basics)
                  </td>
                  <td className="px-6 py-4 text-yellow-400">Intermediate</td>
                </tr>

                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Frameworks & Tools</td>
                  <td className="px-6 py-4">
                    Spring Boot (Basics), Docker (Basics), Git
                  </td>
                  <td className="px-6 py-4 text-yellow-400">Intermediate</td>
                </tr>

                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Data & AI</td>
                  <td className="px-6 py-4">
                    Data Analysis, Excel, AI Prompt Engineering, ML Basics
                  </td>
                  <td className="px-6 py-4 text-blue-400">Working Knowledge</td>
                </tr>

                <tr className="hover:bg-white/5 transition">
                  <td className="px-6 py-4">Systems & Practices</td>
                  <td className="px-6 py-4">
                    Clean Code, Debugging, Agile Basics, System Design Fundamentals
                  </td>
                  <td className="px-6 py-4 text-blue-400">Working Knowledge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>
      {/* PROJECTS */}
<AnimatedSection>
  <section id="projects" className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

    <div className="grid md:grid-cols-2 gap-8">

      {/* ASTOR */}
      <div className="bg-[#121212] p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition">
        <h3 className="text-xl font-semibold mb-3">
          ASTOR – Humanoid Robot System
        </h3>

        <p className="text-gray-400 mb-4">
          Software system for a humanoid robot featuring voice modulation,
          interactive dialogue handling, and real-time state transitions.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 mb-6">
          <li>• Java & Python backend logic</li>
          <li>• Event-driven architecture</li>
          <li>• Sensor & hardware integration</li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com/weeb999/astor-humanoid"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* BIONIC HAND */}
      <div className="bg-[#121212] p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition">
        <h3 className="text-xl font-semibold mb-3">
          Gesture Controlled Bionic Hand
        </h3>

        <p className="text-gray-400 mb-4">
          Real-time gesture-controlled bionic hand using sensor input mapping
          and optimized control algorithms.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 mb-6">
          <li>• IMU & flex sensor integration</li>
          <li>• Real-time motor control</li>
          <li>• Algorithmic gesture mapping</li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com/weeb999/bionic-hand"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>

      {/* SMART INVENTORY */}
      <div className="bg-[#121212] p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition">
        <h3 className="text-xl font-semibold mb-3">
          Smart Inventory Management App
        </h3>

        <p className="text-gray-400 mb-4">
          Inventory system to track sensors and hardware components efficiently
          for robotics and software projects.
        </p>

        <ul className="text-gray-400 text-sm space-y-2 mb-6">
          <li>• Backend CRUD APIs</li>
          <li>• Search & filtering logic</li>
          <li>• Database integration</li>
        </ul>

        <div className="flex gap-4">
          <a
            href="https://github.com/weeb999/smart-inventory"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>
{/* Skin Cancer Prediction */}
<div className="bg-[#121212] p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition">
  <h3 className="text-xl font-semibold mb-3">
    Skin Cancer Prediction System
  </h3>

  <p className="text-gray-400 mb-4">
    A deep-learning classifier for dermoscopic images to detect
    potential skin cancer types using a **Convolutional Neural Network (CNN)**.
  </p>

  <ul className="text-gray-400 text-sm space-y-2 mb-6">
    <li>• Image preprocessing & augmentation</li>
    <li>• CNN model training and evaluation</li>
    <li>• Flask-based web interface for prediction</li>
    <li>• Accuracy optimization and ROC/confusion analysis</li>
  </ul>

  <div className="flex gap-4">
    <a
      href="https://github.com/weeb999/Skin-Cancer-Prediction"
      target="_blank"
      className="text-blue-500 hover:underline"
    >
      GitHub →
    </a>
  </div>
</div>


    </div>
  </section>
</AnimatedSection>


      <div className="max-w-5xl mx-auto border-t border-white/10" />

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
    Designed and developed modular software components for <strong>ASTOR</strong>,
    a humanoid robot with voice modulation and interactive behavior, using
    <strong> Java and Python</strong> with event-driven architecture and clean code practices.
  </li>

  <li>
    Implemented backend logic to manage dialogue flows, state transitions,
    and sensor-driven events, following principles of
    <strong> scalable system design and separation of concerns</strong>.
  </li>

  <li>
    Built an <strong>ArUco marker detection and tracking pipeline</strong> using
    computer vision concepts, integrating camera feeds with backend services
    to trigger real-time actions and dashboard updates.
  </li>

  <li>
    Developed control systems for a <strong>bionic hand</strong> using sensor data
    (IMU, flex sensors, glove inputs), mapping real-time inputs to motor outputs
    through optimized algorithms for smooth actuation.
  </li>

  <li>
    Applied <strong>data structures and algorithms</strong> (arrays, lists, hash maps,
    queues) to efficiently process sensor streams, task scheduling,
    and real-time decision logic.
  </li>

  <li>
    Collaborated in a Git-based development environment, following
    <strong> version control, debugging, and iterative development workflows</strong>
    aligned with industry software engineering standards.
  </li>

  <li>
    Gained exposure to <strong>cloud-ready application design</strong> and automation-friendly
    systems, building software components that can integrate with CI/CD pipelines
    and cloud infrastructure.
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
    Developed <strong>Core Java backend modules</strong> integrated with
    relational databases, writing optimized SQL queries and ensuring
    reliable data flow between application and persistence layers.
  </li>

  <li>
    Worked on <strong>REST-style backend APIs</strong>, focusing on clean API contracts,
    error handling, and maintainable service-layer logic.
  </li>

  <li>
    Used <strong>Git</strong> for version control, participated in code reviews,
    and followed structured development workflows similar to large
    product-based organizations.
  </li>

  <li>
    Gained hands-on exposure to <strong>cloud deployment concepts</strong>,
    understanding how backend services are built, tested, and prepared
    for deployment on cloud platforms.
  </li>

  <li>
    Strengthened fundamentals in <strong>object-oriented programming,
    debugging, and backend system design</strong>.
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
    Designed <strong>Excel dashboards</strong> using pivot tables, charts,
    formulas, and data validation to track operational metrics
    and business performance.
  </li>

  <li>
    Performed <strong>data cleaning, transformation, and analysis</strong>
    to prepare datasets for reporting and downstream application usage.
  </li>

  <li>
    Used <strong>AI-based prompting techniques</strong> to generate insights,
    exploratory queries, and documentation, followed by validation
    using logical and statistical checks.
  </li>

  <li>
    Collaborated with software developers to deliver
    <strong>API-ready datasets and analytical outputs</strong>,
    improving integration between analytics and backend systems.
  </li>

  <li>
    Developed a strong understanding of <strong>data-driven decision making</strong>
    and how analytics supports scalable software solutions.
  </li>
</ul>
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-5xl mx-auto border-t border-white/10" />

      {/* CONTACT */}
      <AnimatedSection>
       <section
  id="contact"
  className="max-w-4xl mx-auto text-center py-20"
>
  <h2 className="text-3xl font-semibold mb-6">
    Get in Touch
  </h2>

  <p className="text-gray-600 mb-8">
    Open to software, cloud, and AI-driven opportunities.
  </p>

  <div className="flex justify-center gap-6 text-sm">
    <a href="mailto:piyushgadiya123@gmail.com" className="hover:text-emerald-600">
      Email
    </a>
    <a href="https://github.com/weeb999" target="_blank" className="hover:text-emerald-600">
      GitHub
    </a>
    <a href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/" target="_blank" className="hover:text-emerald-600">
      LinkedIn
    </a>
  </div>
</section>

      </AnimatedSection>

    </main>
  );
}
