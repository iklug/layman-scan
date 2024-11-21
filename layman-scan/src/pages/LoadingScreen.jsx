const Loading = () => {
  return (
    <div className=" rounded-full flex flex-col items-center h-1/2 w-full justify-center gap-6">
      <div className="h-20 w-20 rounded-full bg-indigo-400 flex justify-center items-end animate-[spin_2s_infinite_linear]">
        <div className="bg-indigo-200 shadow-lg h-14 w-14 rounded-full"></div>
      </div>
      <div className="text-indigo-400 text-lg font-semibold">
        Reading file..
      </div>
    </div>
  );
};

export default Loading;
