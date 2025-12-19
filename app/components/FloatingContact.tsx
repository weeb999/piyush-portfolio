"use client";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://github.com/weeb999"
        target="_blank"
        className="bg-[#121212] px-5 py-3 rounded-full border border-white/20
        hover:bg-white/10 transition text-sm"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com"
        target="_blank"
        className="bg-[#121212] px-5 py-3 rounded-full border border-white/20
        hover:bg-white/10 transition text-sm"
      >
        LinkedIn
      </a>

      <a
        href="mailto:piyushgadiya@gmail.com"
        className="bg-blue-500 px-5 py-3 rounded-full text-white
        hover:bg-blue-600 transition text-sm"
      >
        Email
      </a>
    </div>
  );
}
