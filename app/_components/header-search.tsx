export const HeaderSearch = () => {
  return (
    <div className="flex-1 flex justify-center">
      <input
        type="text"
        placeholder="Search ..."
        className="w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
      />
    </div>
  );
};
