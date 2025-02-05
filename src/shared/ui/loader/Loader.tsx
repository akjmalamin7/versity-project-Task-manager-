interface LoaderProps {
  type?: "regular" | "full_width";
}
const Loader = ({ type = "regular" }: LoaderProps) => {
  return (
    <div
      className={`${
        type === "full_width"
          ? "fixed h-screen w-full left-0 bottom-0 flex justify-center items-center"
          : ""
      }`}
    >
      <div className="flex">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-full absolute
    border-8 border-solid border-gray-200"
          ></div>

          <div
            className="w-12 h-12 rounded-full animate-spin absolute
    border-8 border-solid border-purple-500 border-t-transparent"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
