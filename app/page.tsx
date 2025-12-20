"use client";

import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
    <main className="pt-28 px-6 space-y-32 bg-gray-50 dark:bg-[#0f0f0f]">


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

      {/* ================= EDUCATION ================= */}
<section id="education" className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>

  <div className="space-y-8">

    {/* BE */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">
        Bachelor of Engineering (B.E.) – Information Technology
      </h3>

      <p className="text-gray-700">
        Sinhgad Institutes, Pune
      </p>

      <p className="text-sm text-gray-500">
        2021 – 2025 · CGPA: <strong>8.8</strong>
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        <li>
          Strong foundation in <strong>Data Structures & Algorithms,
          Object-Oriented Programming, DBMS, Operating Systems,
          and Computer Networks</strong>.
        </li>
        <li>
          Completed multiple <strong>backend, cloud, and AI-based projects</strong>
          as part of academic and practical learning.
        </li>
        <li>
          Applied theoretical concepts to <strong>real-world software systems</strong>
          through internships and industry projects.
        </li>
      </ul>
    </div>

    {/* 12th */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">
        Higher Secondary Education (12th – Science)
      </h3>

      <p className="text-gray-700">
        Sinhgad College of Science
      </p>

      <p className="text-sm text-gray-500">
        Percentage: <strong>90%</strong>
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        <li>
          Focused on <strong>Mathematics, Physics, and Computer Science</strong>.
        </li>
        <li>
          Developed analytical thinking and logical problem-solving skills
          essential for engineering and software development.
        </li>
      </ul>
    </div>

    {/* 10th */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">
        Secondary Education (10th)
      </h3>

      <p className="text-gray-700">
        Sarhad English Medium School
      </p>

      <p className="text-sm text-gray-500">
        Percentage: <strong>82%</strong>
      </p>

      <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
        <li>
          Built strong fundamentals in <strong>Mathematics, Science,
          and logical reasoning</strong>.
        </li>
        <li>
          Developed disciplined study habits and early interest
          in <strong>technology and computing</strong>.
        </li>
      </ul>
    </div>

  </div>
</section>


      {/* ================= SKILLS ================= */}
<section id="skills" className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Backend */}
   <div className="border rounded-xl p-6 hover:shadow-lg transition">
  <div className="flex items-center gap-3 mb-3">
    <span className="text-emerald-600 text-xl">⚙️</span>
    <h3 className="font-semibold text-lg">Backend Development</h3>
  </div>

  <p className="text-gray-700">
    Java, Python, REST APIs, OOP, Data Structures & Algorithms,
    Exception Handling, MVC Concepts
  </p>
</div>


    {/* Databases */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-emerald-600 mb-3">
        Databases
      </h3>
      <p className="text-gray-700">
        MySQL, SQL Queries, Joins, Indexing (Basics),
        Schema Design, Data Modeling
      </p>
    </div>

    {/* Cloud */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-emerald-600 mb-3">
        Cloud & DevOps
      </h3>
      <p className="text-gray-700">
        AWS (EC2, S3), CI/CD Basics, Linux,
        GitHub Actions (Intro), Deployment Concepts
      </p>
    </div>

    {/* Frameworks */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-emerald-600 mb-3">
        Frameworks & Tools
      </h3>
      <p className="text-gray-700">
        Spring Boot (Basics), Docker (Basics),
        Git, GitHub, Postman
      </p>
    </div>

    {/* Data */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-emerald-600 mb-3">
        Data & Analytics
      </h3>
      <p className="text-gray-700">
        Data Analysis, Excel (Pivot Tables, Dashboards),
        SQL Reporting, Data Cleaning
      </p>
    </div>

    {/* AI */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">
      <h3 className="font-semibold text-emerald-600 mb-3">
        AI & Automation
      </h3>
      <p className="text-gray-700">
        AI Prompt Engineering, ML Basics,
        CNN Concepts, Automation Workflows
      </p>
    </div>

  </div>
</section>

<section id="experience" className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

  <div className="space-y-10">
    {/* PHN */}
   <div className="border rounded-xl p-6 hover:shadow-lg transition">

      <h3 className="font-semibold text-lg">
        Technology Executive — PHN Technology
      </h3>
      <p className="text-sm text-gray-500">2024 – Present</p>

      <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
        <li>
          Designed and developed <strong>backend services</strong> using
          <strong> Java and Python</strong> to support robotics and AI-driven systems.
        </li>
        <li>
          Implemented <strong>REST APIs</strong> and event-driven logic for
          real-time communication between software modules and hardware components.
        </li>
        <li>
          Built <strong>computer-vision pipelines</strong> (ArUco marker detection)
          integrated with backend workflows for automation and monitoring.
        </li>
        <li>
          Worked on <strong>cloud-ready application design</strong>, following
          <strong> CI/CD-friendly</strong> development practices suitable for AWS deployments.
        </li>
        <li>
          Applied <strong>data structures, clean code principles, debugging,
          and system design fundamentals</strong> in production-level code.
        </li>
      </ul>
    </div>

    {/* UniConverge */}
    <div className="border rounded-xl p-6 hover:shadow-lg transition">

      <h3 className="font-semibold text-lg">
        Software Developer Intern — UniConverge Technologies
      </h3>
      <p className="text-sm text-gray-500">Aug 2024 – Sep 2024</p>

      <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
        <li>
          Developed <strong>Java-based backend APIs</strong> with proper validation,
          exception handling, and service-layer abstraction.
        </li>
        <li>
          Worked with <strong>SQL databases</strong>, implementing CRUD operations,
          joins, and optimized queries.
        </li>
        <li>
          Used <strong>Git, version control, and collaborative workflows</strong>
          aligned with industry standards.
        </li>
      </ul>
    </div>

    {/* Next Forger */}
   <div className="border rounded-xl p-6 hover:shadow-lg transition">

      <h3 className="font-semibold text-lg">
        Data Analyst Intern — Next Forger
      </h3>
      <p className="text-sm text-gray-500">Feb 2024 – Jun 2024</p>

      <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-700">
        <li>
          Performed <strong>data cleaning, transformation, and analysis</strong>
          on structured datasets.
        </li>
        <li>
          Built <strong>Excel dashboards</strong> using pivot tables, charts,
          formulas, and KPI tracking.
        </li>
        <li>
          Used <strong>SQL queries</strong> and <strong>AI-assisted analysis</strong>
          for insights, reporting, and backend-ready datasets.
        </li>
      </ul>
    </div>

  </div>

</section>

    


  

  

{/* ================= PROJECTS ================= */}
<section className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Skin Cancer */}
    <a
  href="https://github.com/weeb999/Skin-Cancer-Prediction"
  target="_blank"
  className="group border rounded-xl overflow-hidden
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-xl
  hover:border-emerald-500"
>

      <div className="relative h-40">
        <Image
          src="/images/projects/skin-cancer.png.webp"
          alt="Skin Cancer Prediction"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold group-hover:text-emerald-600 transition">
  Skin Cancer Detection System
</h3>

        <p className="text-sm text-gray-600">
          Built a <strong>CNN-based medical image classification system</strong>
          to detect skin cancer from dermoscopic images.
        </p>
        <p className="text-xs text-gray-500">
          Python • CNN • Deep Learning • Flask
        </p>
      </div>
    </a>

    {/* Aster */}
    <a
  href="https://github.com/weeb999/aster"
  target="_blank"
  className="group border rounded-xl overflow-hidden
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-xl
  hover:border-emerald-500"
>

    <div className="border rounded-xl overflow-hidden">
      <div className="relative h-40">
        <Image
          src="/images/projects/aster.png.webp"
          alt="Aster Robot"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold group-hover:text-emerald-600 transition">Aster Humanoid Robot</h3>
        <p className="text-sm text-gray-600">
          Developed <strong>backend logic, voice interaction workflows,
          and state-management</strong> for a humanoid robotic system.
        </p>
        <p className="text-xs text-gray-500">
          Java • Python • Robotics • APIs
        </p>
      </div>
    </div>
    </a>

    {/* Bionic Hand */}
    <a
  href="https://github.com/weeb999/bionic hand"
  target="_blank"
  className="group border rounded-xl overflow-hidden
  transition-all duration-300
  hover:-translate-y-1 hover:shadow-xl
  hover:border-emerald-500"
>

    <div className="border rounded-xl overflow-hidden">
      <div className="relative h-40">
        <Image
          src="/images/projects/bionic-hand.png"
          alt="Bionic Hand"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-semibold group-hover:text-emerald-600 transition">Bionic Hand</h3>
        <p className="text-sm text-gray-600">
          Implemented <strong>sensor-to-motor mapping algorithms</strong>
          to convert live hand gestures into smooth robotic movements.
        </p>
        <p className="text-xs text-gray-500">
          Sensors • Control Logic • Embedded Systems
        </p>
      </div>
    </div>
    </a>

  </div>
</section>


   {/* ================= CERTIFICATIONS ================= */}
<section id="certificates" className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

  {/* GRID CONTAINER */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* CERT 1 */}
    <div
      className="group border rounded-xl p-5 text-center
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      hover:border-emerald-500"
    >
      <img
        src="/images/certificates/uniconverge.png.jpg"
        alt="UniConverge"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        Software Developer
      </h3>
      <p className="text-sm text-gray-600">UniConverge Technologies</p>
      <p className="text-xs text-gray-500 mt-1">
        Java • Backend • APIs
      </p>
    </div>

    {/* CERT 2 */}
    <div
      className="group border rounded-xl p-5 text-center
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      hover:border-emerald-500"
    >
      <img
        src="/images/certificates/udemy-java.png.jpg"
        alt="Java"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        Java Programming
      </h3>
      <p className="text-sm text-gray-600">Udemy</p>
      <p className="text-xs text-gray-500 mt-1">
        OOP • Collections • Multithreading
      </p>
    </div>

    {/* CERT 3 */}
    <div
      className="group border rounded-xl p-5 text-center
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      hover:border-emerald-500"
    >
      <img
        src="/images/certificates/udemy-dsa.png.webp"
        alt="DSA"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        DSA & 100+ LeetCode
      </h3>
      <p className="text-sm text-gray-600">Udemy / Practice</p>
      <p className="text-xs text-gray-500 mt-1">
        Arrays • Trees • Hashing
      </p>
    </div>

    {/* CERT 4 */}
    <div
      className="group border rounded-xl p-5 text-center
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-xl
      hover:border-emerald-500"
    >
      <img
        src="/images/certificates/jira.png"
        alt="JIRA"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        JIRA & Agile
      </h3>
      <p className="text-sm text-gray-600">Atlassian</p>
      <p className="text-xs text-gray-500 mt-1">
        Scrum • Agile • Issue Tracking
      </p>
    </div>

  </div>
</section>



      {/* ================= CONTACT ================= */}
      <AnimatedSection>
        <section id="contact" className="max-w-4xl mx-auto text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Get in Touch
          </h2>

          <div className="flex justify-center gap-8 text-sm font-semibold">
            <a href="mailto:piyushgadiya123@gmail.com">Email</a>
            <a href="https://github.com/weeb999" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/" target="_blank">LinkedIn</a>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}
