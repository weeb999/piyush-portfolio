"use client";

import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-40 px-6 space-y-28">

      {/* ================= HERO ================= */}
      <AnimatedSection>
        <section id="home" className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Piyush{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Gadiya
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Software Developer | Cloud | DevOps | Backend Systems
          </p>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technology Executive at PHN Technology with experience building
            scalable backend systems, cloud-ready services, automation pipelines,
            and data-driven applications.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="#experience"
              className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-300 dark:border-white/20 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= SKILLS ================= */}
      <AnimatedSection>
        <section id="skills" className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Skills
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
              <thead className="bg-gray-100 dark:bg-[#121212]">
                <tr>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Technologies</th>
                  <th className="px-6 py-4 text-left">Level</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-white/10 text-gray-700 dark:text-gray-400">
                <tr className="hover:bg-emerald-50/40 dark:hover:bg-white/10 transition">
                  <td className="px-6 py-4">Backend Development</td>
                  <td className="px-6 py-4">Java, Python, REST APIs, OOP, DSA</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">Strong</td>
                </tr>
                <tr className="hover:bg-emerald-50/40 dark:hover:bg-white/10 transition">
                  <td className="px-6 py-4">Databases</td>
                  <td className="px-6 py-4">MySQL, SQL Queries, Data Modeling</td>
                  <td className="px-6 py-4 text-emerald-600 font-semibold">Strong</td>
                </tr>
                <tr className="hover:bg-emerald-50/40 dark:hover:bg-white/10 transition">
                  <td className="px-6 py-4">Cloud & DevOps</td>
                  <td className="px-6 py-4">AWS (EC2, S3), CI/CD Basics, Linux</td>
                  <td className="px-6 py-4 text-yellow-500 font-semibold">Intermediate</td>
                </tr>
                <tr className="hover:bg-emerald-50/40 dark:hover:bg-white/10 transition">
                  <td className="px-6 py-4">Frameworks & Tools</td>
                  <td className="px-6 py-4">Spring Boot, Docker (Basics), Git</td>
                  <td className="px-6 py-4 text-yellow-500 font-semibold">Intermediate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </AnimatedSection>

      {/* ================= PROJECTS ================= */}
      <AnimatedSection>
        <section id="projects" className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Selected Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Skin Cancer Prediction",
                desc: "CNN-based medical image classifier",
                stack: "Python • CNN • Flask",
                link: "https://github.com/weeb999/Skin-Cancer-Prediction",
                img: "/images/projects/skin-cancer.png.webp",
              },
              {
                title: "Aster Humanoid Robot",
                desc: "Voice & state-driven humanoid system",
                stack: "Java • Python • Robotics",
                link: "https://github.com/weeb999/Aster-humanoid",
                img: "/images/projects/aster.png.webp",
              },
              {
                title: "Bionic Hand",
                desc: "Gesture-controlled robotic hand",
                stack: "Sensors • Control Logic",
                link: "https://github.com/weeb999/bionic-hand",
                img: "/images/projects/bionic-hand.png",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                className="group bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden
                hover:shadow-xl hover:-translate-y-1 hover:border-emerald-400 transition-all"
              >
                <div className="relative h-40 w-full">
                  <Image src={project.img} alt={project.title} fill className="object-cover group-hover:scale-105 transition" />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.desc}</p>
                  <p className="text-xs text-gray-500 mt-1">{project.stack}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* ================= EXPERIENCE ================= */}
<AnimatedSection>
  <section id="experience" className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
      Experience
    </h2>

    {/* PHN TECHNOLOGY */}
    <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl p-6 mb-6
    hover:shadow-lg hover:border-emerald-400 transition-all">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Technology Executive — PHN Technology
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        2024 – Present
      </p>

      <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-3">
        <li>
          Designed and implemented <strong>backend software components</strong> for
          intelligent robotic systems, following <strong>modular architecture,
          clean code principles, and separation of concerns</strong>.
        </li>

        <li>
          Built a <strong>computer vision pipeline</strong> using ArUco marker detection,
          integrating camera feeds with backend services to trigger
          <strong>real-time events, automation workflows, and dashboards</strong>.
        </li>

        <li>
          Developed <strong>control logic and data-processing layers</strong> for a
          bionic hand system, converting real-time sensor data
          (IMU, flex sensors) into smooth motor actuation using
          optimized algorithms.
        </li>

        <li>
          Worked with <strong>Java and Python services</strong>, applying
          <strong>data structures, REST-style APIs, and event-driven logic</strong>
          to handle sensor streams and system state transitions.
        </li>

        <li>
          Gained hands-on exposure to <strong>cloud-ready system design</strong>,
          automation-friendly services, and <strong>CI/CD-aligned development
          practices</strong> suitable for AWS-based deployments.
        </li>
      </ul>
    </div>

    {/* UNICONVERGE */}
    <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl p-6 mb-6
    hover:shadow-lg hover:border-emerald-400 transition-all">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Software Developer Intern — UniConverge Technologies
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Aug 2024 – Sep 2024
      </p>

      <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-3">
        <li>
          Developed <strong>Java-based backend APIs</strong> with proper
          request validation, error handling, and service-layer abstraction.
        </li>

        <li>
          Worked with <strong>SQL databases</strong>, implementing CRUD operations,
          joins, and optimized queries to support application workflows.
        </li>

        <li>
          Used <strong>Git</strong> for version control, participated in
          <strong>code reviews</strong>, and followed structured development
          workflows aligned with industry standards.
        </li>

        <li>
          Gained exposure to <strong>cloud deployment concepts</strong>,
          understanding how backend services are built, tested,
          and prepared for production environments.
        </li>
      </ul>
    </div>

    {/* NEXT FORGER */}
    <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 rounded-xl p-6
    hover:shadow-lg hover:border-emerald-400 transition-all">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        Data Analyst Intern — Next Forger
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Feb 2024 – Jun 2024
      </p>

      <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 space-y-3">
        <li>
          Performed <strong>data cleaning, transformation, and analysis</strong>
          on large datasets to improve reporting accuracy and usability.
        </li>

        <li>
          Built <strong>Excel dashboards</strong> using pivot tables,
          charts, formulas, and data validation to track KPIs
          and operational metrics.
        </li>

        <li>
          Used <strong>SQL queries</strong> and structured data extraction
          techniques to support business and technical teams.
        </li>

        <li>
          Applied <strong>AI-assisted prompting</strong> for exploratory analysis,
          insight generation, and documentation, validating results
          with logical and statistical checks.
        </li>

        <li>
          Collaborated with developers to deliver
          <strong>API-ready datasets</strong> and analytical outputs
          for backend integration.
        </li>
      </ul>
    </div>
  </section>
</AnimatedSection>


      {/* ================= CONTACT ================= */}
      <AnimatedSection>
        <section id="contact" className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Open to software, cloud, and backend development opportunities.
          </p>

          <div className="flex justify-center gap-8 text-sm font-semibold">
            <a href="mailto:piyushgadiya123@gmail.com" className="hover:text-emerald-600">Email</a>
            <a href="https://github.com/weeb999" target="_blank" className="hover:text-emerald-600">GitHub</a>
            <a href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/" target="_blank" className="hover:text-emerald-600">LinkedIn</a>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}
