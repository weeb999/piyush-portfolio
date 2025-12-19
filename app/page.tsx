"use client";

import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-40 px-6 space-y-28">


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
          <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight">
Skills</h2>

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
/* PROJECTS */
<AnimatedSection>
  <section id="projects" className="max-w-6xl mx-auto">
  <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight">


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
        {
          title: "Smart Inventory",
          desc: "Hardware inventory tracker",
          stack: "Backend • Database",
          link: "https://github.com/weeb999/smart-inventory",
          img: "/images/projects/inventory.png.webp",
        },
      ].map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          className="group bg-white border rounded-xl overflow-hidden
          hover:shadow-lg hover:-translate-y-1 transition"
        >
          <div className="relative h-40 w-full">
            <Image
              src={project.img}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold mb-1 group-hover:text-emerald-600">
              {project.title}
            </h3>

            <p className="text-sm text-gray-600 mb-2">
              {project.desc}
            </p>

            <p className="text-xs text-gray-400">
              {project.stack}
            </p>
          </div>
        </a>
      ))}
    </div>
  </section>
</AnimatedSection>



      <div className="max-w-5xl mx-auto border-t border-white/10" />

      {/* EDUCATION */}
<AnimatedSection>
  <section id="education" className="max-w-4xl mx-auto">
    <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight">

      Education
    </h2>

    <div className="space-y-6">

      {/* BE */}
      <div
        className="bg-white border rounded-xl p-6
        hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold">
          Bachelor of Engineering (B.E.) — Information Technology
        </h3>

        <p className="text-gray-700">
          Sinhgad Institutes
        </p>

        <p className="text-sm text-gray-500 mt-1">
          2021 – 2025 | CGPA: <strong>8.8</strong>
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>
            Built a strong foundation in Data Structures, Algorithms,
            Object-Oriented Programming, Database Management Systems,
            Operating Systems, and Computer Networks.
          </li>
          <li>
            Completed multiple hands-on projects involving backend
            development, cloud fundamentals, AI/ML applications,
            and system design concepts.
          </li>
          <li>
            Actively participated in technical training programs,
            internships, and real-world problem-solving initiatives.
          </li>
        </ul>
      </div>

      {/* JR COLLEGE */}
      <div
        className="bg-white border rounded-xl p-6
        hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold">
          Higher Secondary Education (12th Grade)
        </h3>

        <p className="text-gray-700">
          Sinhgad College of Science
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Percentage: <strong>90%</strong>
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>
            Specialized in Science stream with focus on Mathematics
            and Computer Science fundamentals.
          </li>
          <li>
            Developed analytical thinking and problem-solving skills
            essential for engineering and software development.
          </li>
        </ul>
      </div>

      {/* SCHOOL */}
      <div
        className="bg-white border rounded-xl p-6
        hover:shadow-md transition"
      >
        <h3 className="text-lg font-semibold">
          Secondary Education (10th Grade)
        </h3>

        <p className="text-gray-700">
          Sarhad English Medium School
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Percentage: <strong>82%</strong>
        </p>

        <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
          <li>
            Built strong fundamentals in Mathematics, Science,
            and logical reasoning.
          </li>
          <li>
            Developed disciplined study habits and early interest
            in technology and problem solving.
          </li>
        </ul>
      </div>

    </div>
  </section>
</AnimatedSection>


      {/* CERTIFICATIONS */}
{/* CERTIFICATES */}
<AnimatedSection>
  <section id="certificates" className="max-w-5xl mx-auto">
   <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight">


      Certifications
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          title: "Software Developer Certification",
          issuer: "UniConverge Technologies",
          img: "/images/certificates/uniconverge.png.jpg",
        },
        {
          title: "Java Programming",
          issuer: "Udemy",
          img: "/images/certificates/udemy-java.png.jpg",
        },
        {
          title: "DSA + 100 LeetCode Problems",
          issuer: "Udemy / Self Practice",
          img: "/images/certificates/udemy-dsa.png.webp",
        },
      ].map((cert) => (
        <div
          key={cert.title}
          className="bg-white border rounded-xl overflow-hidden
          hover:shadow-md hover:-translate-y-1 transition"
        >
          <div className="relative h-36 w-full">
            <Image
              src={cert.img}
              alt={cert.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <h3 className="font-semibold mb-1">
              {cert.title}
            </h3>

            <p className="text-sm text-gray-600">
              Issued by: {cert.issuer}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
</AnimatedSection>


      {/* EXPERIENCE */}
      <AnimatedSection>
        <section id="experience" className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight"></h2>


          <div className="bg-[#121212] p-6 rounded-xl mb-6">
            <h3 className="text-xl font-semibold">
              Technology Executive — PHN Technology
            </h3>
            <p className="text-gray-400 mb-4">2024 – Present</p>

            <ul className="list-disc list-inside text-gray-400 space-y-3">

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
  <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-950 tracking-tight">

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
