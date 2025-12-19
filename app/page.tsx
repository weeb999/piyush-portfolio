import Link from "next/link";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <main className="pt-32 px-6 space-y-32">

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
            building intelligent systems that bridge software, AI, and robotics.
          </p>

          <div className="mt-10 flex justify-center gap-6">
            <Link
              href="/projects"
              className="px-6 py-3 bg-blue-500 rounded font-semibold hover:bg-blue-600 transition"
            >
              View Projects
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/20 rounded hover:bg-white/10 transition"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </AnimatedSection>

      {/* SEPARATOR */}
      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* ABOUT */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am a technology-driven software developer currently working at
            PHN Technology, where I collaborate on real-world robotics and AI
            solutions. My work spans humanoid robots, gesture-controlled systems,
            smart applications, and data-driven workflows.
            <br /><br />
            I enjoy solving complex problems using Java and Python, applying AI/ML
            concepts, and building scalable systems that integrate hardware and software.
          </p>
        </section>
      </AnimatedSection>

      {/* SEPARATOR */}
      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* SKILLS */}
      <AnimatedSection>
        <section className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Software Development",
                skills: ["Java", "Python", "Problem Solving", "APIs"],
              },
              {
                title: "AI / Data",
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
                <h3 className="text-xl font-semibold mb-4">
                  {group.title}
                </h3>
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

      {/* SEPARATOR */}
      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* EXPERIENCE PREVIEW */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Experience</h2>

          <div className="bg-[#121212] p-6 rounded-xl text-left transition
          hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
            <h3 className="text-xl font-semibold">
              Technology Executive — PHN Technology
            </h3>
            <p className="text-gray-400 mb-4">2024 – Present</p>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Worked on ASTOR, a humanoid robot with voice modulation</li>
              <li>Developed a bionic hand mimicking real-time human gestures</li>
              <li>Built a smart inventory app for fast sensor identification</li>
              <li>Applied AI/ML and data analytics in real-world systems</li>
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

      {/* SEPARATOR */}
      <div className="max-w-4xl mx-auto border-t border-white/10" />

      {/* CTA */}
      <AnimatedSection>
        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Let’s Build Something Impactful
          </h2>

          <p className="text-gray-400 mb-8">
            I’m open to software development, AI, and cloud-focused opportunities.
            Let’s connect and collaborate.
          </p>

          <Link
            href="/contact"
            className="px-8 py-4 bg-blue-500 rounded font-semibold hover:bg-blue-600 transition"
          >
            Get in Touch
          </Link>
        </section>
        <section className="max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-6">Resume</h2>

  <p className="text-gray-400 mb-8">
    Download my resume to learn more about my experience,
    projects, and technical skills.
  </p>

  <a
    href="/resume/Piyush_Gadiya_Resume.pdf"
    target="_blank"
    className="inline-block px-8 py-4 bg-blue-500 rounded
    font-semibold hover:bg-blue-600 transition"
  >
    Download Resume
  </a>
</section>

      </AnimatedSection>

    </main>
  );
}
