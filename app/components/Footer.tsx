export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Piyush Gadiya. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/weeb999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
