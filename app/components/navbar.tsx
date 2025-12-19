import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/60 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-bold text-lg">
          Piyush.dev
        </Link>
        <div className="space-x-6 text-gray-300">
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <a
  href="/resume/Piyush_Gadiya_Resume.pdf"
  target="_blank"
  className="hover:text-white transition"
>
  Resume
</a>

        </div>
      </div>
    </nav>
  );
}
