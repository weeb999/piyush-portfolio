"use client";

import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
<main className="
  pt-24 px-6 space-y-28
  bg-gradient-to-b
  from-gray-50 to-white
  dark:from-[#0e0e0e] dark:to-[#0b0b0b]
">

<div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />


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

          <p className="text-gray-600 dark:text-gray-400">

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
<div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />

      {/* ================= EDUCATION ================= */}
<section id="education" className="max-w-4xl mx-auto">
<div className="mb-10">
  <div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Education</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>

</div>

  <div className="space-y-8">

    {/* BE */}
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>


      <h3 className="text-lg font-semibold">
        Bachelor of Engineering (B.E.) – Information Technology
      </h3>

      <p className="text-gray-600 dark:text-gray-400">

        Sinhgad Institutes, Pune
      </p>

     <p className="text-gray-600 dark:text-gray-400">

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
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <h3 className="text-lg font-semibold">
        Higher Secondary Education (12th – Science)
      </h3>

     <p className="text-gray-600 dark:text-gray-400">

        Sinhgad College of Science
      </p>

     <p className="text-gray-600 dark:text-gray-400">

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
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <h3 className="text-lg font-semibold">
        Secondary Education (10th)
      </h3>

     <p className="text-gray-600 dark:text-gray-400">

        Sarhad English Medium School
      </p>

   <p className="text-gray-600 dark:text-gray-400">

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

<div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />

      {/* ================= SKILLS ================= */}
<SkillsSection/>
  

<section id="experience" className="max-w-6xl mx-auto">
  <div className="mb-10">
    <div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Experience</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>

  
</div>


  <div className="space-y-10">
    {/* PHN */}
   <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>


      <h3 className="font-semibold text-lg">
        Technology Executive — PHN Technology
      </h3>
    <p className="text-gray-600 dark:text-gray-400">
2024 – Present</p>

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
   <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>


      <h3 className="font-semibold text-lg">
        Software Developer Intern — UniConverge Technologies
      </h3>
     <p className="text-gray-600 dark:text-gray-400">
Aug 2024 – Sep 2024</p>

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
   <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>


      <h3 className="font-semibold text-lg">
        Data Analyst Intern — Next Forger
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
Feb 2024 – Jun 2024</p>

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

    


  

  <div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />


{/* ================= PROJECTS ================= */}
<section id = "projects" className="max-w-6xl mx-auto">
<div className="mb-10">
  <div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Projects</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>

 
</div>


  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Skin Cancer */}
    <a
  href="https://github.com/weeb999/Skin-Cancer-Prediction"
  target="_blank"
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

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

        <p className="text-gray-600 dark:text-gray-400">

          Built a <strong>CNN-based medical image classification system</strong>
          to detect skin cancer from dermoscopic images.
        </p>
        <p className="text-gray-600 dark:text-gray-400">

          Python • CNN • Deep Learning • Flask
        </p>
      </div>
    </a>

    {/* Aster */}
    <a
  href="https://github.com/weeb999/aster"
  target="_blank"
 className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

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
       <p className="text-gray-600 dark:text-gray-400">

          Developed <strong>backend logic, voice interaction workflows,
          and state-management</strong> for a humanoid robotic system.
        </p>
       <p className="text-gray-600 dark:text-gray-400">

          Java • Python • Robotics • APIs
        </p>
      </div>
    </div>
    </a>

    {/* Bionic Hand */}
    <a
  href="https://github.com/weeb999/bionic hand"
  target="_blank"
className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

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
       <p className="text-gray-600 dark:text-gray-400">

          Implemented <strong>sensor-to-motor mapping algorithms</strong>
          to convert live hand gestures into smooth robotic movements.
        </p>
        <p className="text-gray-600 dark:text-gray-400">

          Sensors • Control Logic • Embedded Systems
        </p>
      </div>
    </div>
    </a>

  </div>
</section>
<div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />


   {/* ================= CERTIFICATIONS ================= */}
<section id="certificates" className="max-w-6xl mx-auto">
<div className="mb-10">
  <div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Certifications</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>


</div>


  {/* GRID CONTAINER */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {/* CERT 1 */}
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <img
        src="/images/certificates/uniconverge.png.jpg"
        alt="UniConverge"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        Software Developer
      </h3>
     <p className="text-gray-600 dark:text-gray-400">
UniConverge Technologies</p>
      <p className="text-gray-600 dark:text-gray-400">

        Java • Backend • APIs
      </p>
    </div>

    {/* CERT 2 */}
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <img
        src="/images/certificates/udemy-java.png.jpg"
        alt="Java"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        Java Programming
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
Udemy</p>
      <p className="text-gray-600 dark:text-gray-400">

        OOP • Collections • Multithreading
      </p>
    </div>

    {/* CERT 3 */}
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <img
        src="/images/certificates/udemy-dsa.png.webp"
        alt="DSA"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        DSA & 100+ LeetCode
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
Udemy / Practice</p>
      <p className="text-gray-600 dark:text-gray-400">

        Arrays • Trees • Hashing
      </p>
    </div>

    {/* CERT 4 */}
    <div
  className="
  bg-white/90 dark:bg-[#161616]
  border border-gray-200 dark:border-white/10
  rounded-2xl p-6
  backdrop-blur
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300
"

>

      <img
        src="/images/certificates/image.png"
        alt="JIRA"
        className="h-20 mx-auto mb-4 object-contain"
      />
      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition">
        JIRA & Agile
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
Atlassian</p>
      <p className="text-gray-600 dark:text-gray-400">

        Scrum • Agile • Issue Tracking
      </p>
    </div>

  </div>
</section>

<div className="max-w-6xl mx-auto border-t border-gray-200 dark:border-white/10" />


      {/* ================= CONTACT ================= */}
      <AnimatedSection>
        <section id="contact" className="max-w-4xl mx-auto text-center py-20">
        <div className="mb-10">
          <div className="mb-10">
  <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
  <div className="h-1 w-12 bg-emerald-500 rounded-full" />
</div>

 
</div>


          <div className="flex justify-center gap-8 text-sm font-semibold">
            <a href="mailto:piyushgadiya123@gmail.com"  className="relative text-gray-600 dark:text-gray-400
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0 after:bg-emerald-500
  after:transition-all hover:after:w-full
  hover:text-emerald-500"
>Email</a>
            <a href="https://github.com/weeb999" className="relative text-gray-600 dark:text-gray-400
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0 after:bg-emerald-500
  after:transition-all hover:after:w-full
  hover:text-emerald-500"
target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/"  target="_blank">LinkedIn</a>
          </div>
        </section>
      </AnimatedSection>

    </main>
  );
}
