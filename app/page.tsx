import AnimatedSection from "./components/AnimatedSection";

{/* EXPERIENCE */}
<AnimatedSection>
  <section id="experience" className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>

    {/* Full-Time */}
    <div className="bg-[#121212] p-6 rounded-xl mb-6">
      <h3 className="text-xl font-semibold">
        Technology Executive (Software & Systems) — PHN Technology
      </h3>
      <p className="text-gray-400 mb-4">2024 – Present</p>

      <ul className="list-disc list-inside text-gray-400 space-y-3">
        <li>
          Designed and developed modular software components for <b>ASTOR</b>,
          a humanoid robot platform, implementing event-driven logic, REST-style
          APIs, and state-based workflows to manage voice interactions,
          dialogue flows, and system behavior.
        </li>

        <li>
          Built an <b>ArUco marker detection and tracking pipeline</b> using
          computer vision techniques, integrating Python services with
          backend logic to process real-time camera streams and trigger
          automated system actions.
        </li>

        <li>
          Developed control software for a <b>bionic hand system</b>, mapping
          live sensor data (IMU, flex, and glove inputs) to actuator commands,
          focusing on latency optimization, data smoothing, and real-time
          performance.
        </li>

        <li>
          Applied core <b>data structures and algorithms</b> (arrays, lists,
          hash maps, queues) to efficiently process sensor streams, manage
          task scheduling, and optimize lookup-heavy operations.
        </li>

        <li>
          Collaborated with cross-functional teams to integrate software
          components with hardware systems, following clean code practices,
          version control (Git), and basic CI workflows.
        </li>
      </ul>
    </div>

    {/* Internship - UniConverge */}
    <div className="bg-[#121212] p-6 rounded-xl mb-6">
      <h3 className="text-xl font-semibold">
        Software Developer Intern (Core Java) — UniConverge Technologies
      </h3>
      <p className="text-gray-400 mb-4">Aug 2024 – Sep 2024</p>

      <ul className="list-disc list-inside text-gray-400 space-y-3">
        <li>
          Developed backend application logic using <b>Core Java</b>,
          implementing object-oriented principles, exception handling,
          and modular class design.
        </li>

        <li>
          Integrated Java services with <b>SQL databases</b>, writing queries
          and ensuring reliable data flow between application and persistence
          layers.
        </li>

        <li>
          Worked with <b>Git-based version control</b>, participating in code
          reviews and following structured development workflows similar to
          enterprise software teams.
        </li>

        <li>
          Gained exposure to <b>cloud deployment concepts</b>, backend APIs,
          and application testing in distributed environments.
        </li>
      </ul>
    </div>

    {/* Internship - Next Forger */}
    <div className="bg-[#121212] p-6 rounded-xl">
      <h3 className="text-xl font-semibold">
        Data Analyst Intern — Next Forger
      </h3>
      <p className="text-gray-400 mb-4">Feb 2024 – Jun 2024</p>

      <ul className="list-disc list-inside text-gray-400 space-y-3">
        <li>
          Built analytical dashboards using <b>Excel</b> (pivot tables,
          formulas, charts) to monitor KPIs, operational workflows, and
          performance trends.
        </li>

        <li>
          Leveraged <b>AI-assisted prompting</b> to generate exploratory
          insights, queries, and documentation, validating outputs through
          statistical reasoning and business logic.
        </li>

        <li>
          Collaborated with software developers to deliver
          <b>cleaned, API-ready datasets</b> and analytical outputs suitable
          for backend integration and reporting systems.
        </li>
      </ul>
    </div>
  </section>
</AnimatedSection>
