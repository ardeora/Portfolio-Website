const BgGrid = () => {
  return (
    <div className="gradient-grid-provider absolute left-0 top-0 -z-10 h-[600px] w-full overflow-hidden">
      <div className="gradient-grid absolute left-1/2 top-0 h-[1920px] w-[1920px] -translate-x-1/2">
        <div className="absolute inset-0 rounded-md bg-[url('/imgs/noise.png')] bg-[length:300px] opacity-30"></div>
      </div>
    </div>
  );
};

export default BgGrid;
