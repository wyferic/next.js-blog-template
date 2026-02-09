export const HeaderButton = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <a
      href={href}
      className="select-none text-black dark:text-white relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-[10%] after:w-[80%] after:h-0.5 after:rounded after:bg-black after:transform after:scale-x-0 after:origin-center after:transition-transform after:duration-150 hover:after:scale-x-100 dark:after:bg-white pt-1"
    >
      {children}
    </a>
  );
};
