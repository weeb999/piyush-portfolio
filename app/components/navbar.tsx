"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">
          Piyush
        </a>

        <div className="flex gap-6 text-gray-300">
          <a href="#projects" className="hover:text white transition">
            Projects
            </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#experience" className="hover:text-white transition">
            Experience
          </a>
          <a href="#resume" className="hover:text-white transition">
            Resume
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
