import { IoChatbubbleOutline } from "react-icons/io5";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 transition-colors duration-200">
      <span className="flex justify-left items-center">
        <IoChatbubbleOutline className="w-20 h-20 pr-1" />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
          Blog.
        </h1>
      </span>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-4">
        A free blog template built on top of the original blog template from{" "}
        <a
          className="hover:text-blue-400 text-blue-600 dark:hover:text-blue-600 dark:text-blue-400 duration-200 transition-colors"
          href="https://vercel.com/templates/blog/blog-starter-kit"
        >
          Next.js
        </a>
        . All cover images are{" "}
        <a
          className="hover:text-blue-400 text-blue-600 dark:hover:text-blue-600 dark:text-blue-400 duration-200 transition-colors"
          href="http://www.freepik.com"
        >
          designed by Freepik
        </a>
      </h4>
    </section>
  );
}
