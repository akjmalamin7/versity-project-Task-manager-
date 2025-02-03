const Loader = () => {
  return (
    <div className="relative w-12 h-12 animate-rotate">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-5 h-5 bg-white rounded-full animate-ball1 shadow-[30px_0_0_#ff3d00] mb-[10px]"></div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-5 h-5 bg-[#ff3d00] rounded-full animate-ball2 shadow-[30px_0_0_#fff]"></div>
    </div>
  );
};

export default Loader;
