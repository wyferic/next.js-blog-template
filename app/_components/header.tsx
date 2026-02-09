import { ThemeToggle } from "./theme-toggle";

export const HeaderBlog = () => {
  return (
    <header className="transition-colors duration-200 fixed flex items-center h-12 w-screen justify-between px-4 py-2 bg-white dark:bg-black color-change z-1000">
      <span className="hidden sm:flex-1 sm:flex sm:ml-4 sm:text-black sm:dark:text-white sm:text-xl sm:font-bold">
        HEADER
      </span>

      <div className="flex-1 flex justify-end md:mr-8">
        <ThemeToggle />
      </div>
    </header>
  );
};
