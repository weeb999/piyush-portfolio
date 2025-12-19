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
            Software Developer | AI & Robotics | Cloud Enthusiast
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto">
            Technology Executive at PHN Technology with hands-on experience
            building intelligent systems that combine software, AI, and robotics
            for real-world applications.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* ABOUT */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am a technology-driven software developer currently working at
            PHN Technology, where I contribute to robotics and AI-based systems.
            My experience spans humanoid robots, gesture-controlled devices,
            smart inventory applications, and data-driven workflows.
            <br /><br />
            I enjoy solving problems using Java and Python, exploring AI/ML
            concepts, and building scalable software that integrates seamlessly
            with hardware systems.
          </p>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* SKILLS */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                skills: ["Java", "Python", "Problem Solving", "APIs", "Git"],
              },
              {
                title: "AI & Data",
                skills: ["AI & ML", "Prompt Engineering", "Data Analysis", "Excel"],
              },
              {
                title: "Robotics & Systems",
                skills: ["Humanoid Robots", "Bionic Hand", "Sensors", "Automation"],
              },
            ].map((group) => (
              <div
                key={group.title}
                className="bg-[#121212] p-6 rounded-xl transition
                hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <h3 className="text-xl font-semibold mb-4">{group.title}</h3>
                <ul className="text-gray-400 space-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* EXPERIENCE */}
<AnimatedSection>
  <section id="experience" className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

    {/* Full-Time */}
    <div className="bg-[#121212] p-6 rounded-xl mb-6">
      <h3 className="text-xl font-semibold">
        Technology Executive — PHN Technology
      </h3>
      <p className="text-gray-400 mb-4">2024 – Present</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2">

<li>Designed and implemented software components for ASTOR,
   a humanoid robot with voice modulation and interactive behaviour, using modular code structures, event‑driven logic, and API integrations to control dialogue flows and state transitions.</li>
<li>Built a smart ArUco scanning pipeline to detect and track ArUco markers from camera feeds,
   integrating OpenCV‑style image processing and Python/Java services to trigger actions in robotics and dashboard interfaces.</li>
<li>Developed control logic for a bionic hand with 3D‑printed components, wiring sensor data (glove/IMU/flex sensors)
   to motor commands and writing mapping algorithms that convert live hand gestures into smooth, real‑time actuation.</li>
<li>Created internal tools (CLI utilities, scripts, and small web UIs) to support robotics demos and lab workflows,
   applying core concepts like OOP, collections, error handling, and REST communication in Java and Python.</li>
<li>Collaborated with senior engineers using Git, code reviews, and branching strategies,
   improving code quality and learning industry‑standard practices for feature development, refactoring, and debugging.</li>
<li>Applied data structures and algorithms (arrays, lists, hash maps, basic graph/queue logic) in project code to handle sensor streams, 
  lookups, and task scheduling efficiently, demonstrating readiness for large‑scale systems.</li>
<li>Documented architecture, APIs, and usage steps for each project, enabling other team members to reuse components and extend features in a maintainable way.</li>
<li>Tech stack at PHN: 
  Java, Python, basic C/C++ for microcontrollers;
   REST APIs; OpenCV‑style computer vision and ArUco workflows; 
   Git and GitHub; Linux terminal; 3D printing workflows; basic robotics frameworks; 
   data structures and algorithms fundamentals.</li>


      </ul>
    </div>

    {/* Internship - UniConverge */}
    <div className="bg-[#121212] p-6 rounded-xl mb-6">
      <h3 className="text-xl font-semibold">
        Core Java Developer Intern — UniConverge Technologies
      </h3>
      <p className="text-gray-400 mb-4">Aug 2024 – Sep 2024</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Developed and tested applications using Core Java</li>
        <li>Strengthened problem-solving and object-oriented programming skills</li>
        <li>Worked on real-world Java use cases in a professional setup</li>
      </ul>
    </div>

    {/* Internship - Next Forger */}
    <div className="bg-[#121212] p-6 rounded-xl">
      <h3 className="text-xl font-semibold">
        Data Analyst Intern — Next Forger
      </h3>
      <p className="text-gray-400 mb-4">Feb 2024 – Jun 2024</p>

      <ul className="list-disc list-inside text-gray-400 space-y-2">
        <li>Performed data preprocessing on internal company portals</li>
        <li>Monitored workflows and ensured database integrity</li>
        <li>Assisted teams with reporting and data analysis tasks</li>
      </ul>
    </div>


          <Link
            href="/experience"
            className="inline-block mt-6 text-blue-500 hover:underline"
          >
            View full experience →
          </Link>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* RESUME */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Resume</h2>

          <p className="text-gray-400 mb-8">
            Download my resume to learn more about my professional experience,
            projects, and technical skills.
          </p>

          <a
            href="\resume\Piyush_Gadiya_Resume.pdf"
            target="_blank"
            className="inline-block px-8 py-4 bg-blue-500 rounded-lg
            font-semibold hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </section>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* CTA */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center pb-24">
          <div
            className="bg-[#121212] rounded-2xl p-10 md:p-14 transition
            hover:shadow-xl hover:shadow-blue-500/10"
          >
            <h2 className="text-4xl font-bold mb-6">
              Let’s Build Something Impactful
            </h2>

            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              I’m open to software development, AI, and cloud-focused roles.
              If you’re looking for someone who enjoys solving real-world
              problems, let’s connect.
            </p>

            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-blue-500 rounded-lg
              font-semibold hover:bg-blue-600 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}
