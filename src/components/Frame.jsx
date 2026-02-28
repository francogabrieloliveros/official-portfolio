function Frame() {
  return (
    <div className="z-20 max-sm:hidden">
      <div className="fixed top-5 left-5 z-20 h-[150px] w-px bg-black md:h-[300px]"></div>
      <div className="fixed top-5 left-5 z-20 h-px w-[150px] bg-black md:w-[300px]"></div>
      <div className="fixed right-5 bottom-5 z-20 h-[150px] w-px bg-black md:h-[300px]"></div>
      <div className="fixed right-5 bottom-5 z-20 h-px w-[150px] bg-black md:w-[300px]"></div>
    </div>
  );
}

export default Frame;
