"use client";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
     <a
  href="https://github.com/weeb999"
  target="_blank"
  className="
    flex items-center gap-2 px-4 py-2 rounded-lg
    bg-white text-gray-900
    dark:bg-slate-800 dark:text-gray-100
    border border-gray-300 dark:border-gray-600
    hover:bg-gray-100 dark:hover:bg-slate-700
    shadow transition
  "
>
  GitHub
</a>


     <a
  href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/"
  target="_blank"
  className="
    flex items-center gap-2 px-4 py-2 rounded-lg
    bg-white text-gray-900
    dark:bg-slate-800 dark:text-gray-100
    border border-gray-300 dark:border-gray-600
    hover:bg-gray-100 dark:hover:bg-slate-700
    shadow transition
  "
>
  LinkedIn
</a>


      <a
  href="mailto:piyushgadiya123@gmail.com"
  target="_blank"
  className="
    flex items-center gap-2 px-4 py-2 rounded-lg
    bg-white text-gray-900
    dark:bg-slate-800 dark:text-gray-100
    border border-gray-300 dark:border-gray-600
    hover:bg-gray-100 dark:hover:bg-slate-700
    shadow transition
  "
>
  Email
</a>

      
    </div>
  );
}
