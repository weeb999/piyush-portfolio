import AnimatedSection from "../components/AnimatedSection";

const projects = [
  {
    title: "ASTOR – Humanoid Robot",
    description:
      "A humanoid robot with voice modulation and intelligent interaction capabilities, integrating AI concepts with real-world robotics systems.",
    tech: ["Python", "AI", "Robotics", "Voice Processing"],
  },
  {
    title: "Bionic Hand System",
    description:
      "A gesture-controlled bionic hand that mimics real-time human hand movements using sensors and control algorithms.",
    tech: ["Python", "Sensors", "Embedded Systems", "Automation"],
  },
  {
    title: "Smart Inventory Application",
    description:
      "An application designed to quickly identify and manage sensors and components used in robotics and electronics projects.",
    tech: ["Java", "Data Management", "UI Design"],
  },
  {
    title: "AI Prompt Engineering Tools",
    description:
      "Experimented with prompt engineering techniques to optimize AI outputs for automation, analysis, and productivity workflows.",
    tech: ["AI", "Prompt Engineering", "Automation"],
  },
];

export default function Projects() {
  return (
    <main className="pt-32 px-6 space-y-20 max-w-6xl mx-auto">

      {/* HEADER */}
      <AnimatedSection>
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-gray-400">
            A selection of projects showcasing my experience in software
            development, AI, robotics, and real-world problem solving.
          </p>
        </section>
      </AnimatedSection>

      {/* PROJECT GRID */}
      <AnimatedSection>
        <section className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#121212] rounded-xl p-6 transition
              hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full
                    bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Want to see more?
          </h2>
          <p className="text-gray-400 mb-6">
            I continuously work on new ideas and real-world systems.
            Feel free to reach out if you’d like to collaborate.
          </p>

          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-blue-500 rounded
            font-semibold hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </section>
      </AnimatedSection>

    </main>
  );
}
