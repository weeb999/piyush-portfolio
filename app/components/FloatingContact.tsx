"use client";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
     <a
  href="https://github.com/weeb999"
  target="_blank"
    className="relative text-gray-600 dark:text-gray-400
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0 after:bg-emerald-500
  after:transition-all hover:after:w-full
  hover:text-emerald-500"
>
  GitHub
</a>


     <a
  href="https://www.linkedin.com/in/piyush-gadiya-a422252a8/"
  target="_blank"
   className="relative text-gray-600 dark:text-gray-400
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0 after:bg-emerald-500
  after:transition-all hover:after:w-full
  hover:text-emerald-500"
>
  LinkedIn
</a>


      <a
  href="mailto:piyushgadiya123@gmail.com"
  target="_blank"
    className="relative text-gray-600 dark:text-gray-400
  after:absolute after:left-0 after:-bottom-1
  after:h-[2px] after:w-0 after:bg-emerald-500
  after:transition-all hover:after:w-full
  hover:text-emerald-500"
>
  Email
</a>

      
    </div>
  );
}
