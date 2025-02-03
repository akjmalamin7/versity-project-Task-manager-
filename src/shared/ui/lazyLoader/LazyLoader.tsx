const LazyLoader = () => {
  return (
    <div className="absolute inset-0 z-[500000] bg-white/20 cursor-pointer">
      <div className="relative w-full h-[3px] overflow-hidden bg-primary">
        <div className="absolute h-[3px] bg-inherit animate-indeterminate"></div>
        <div className="absolute h-[3px] bg-inherit animate-indeterminate-short delay-[1.15s]"></div>
      </div>
    </div>
  );
};

export default LazyLoader;
