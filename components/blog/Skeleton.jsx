import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full ">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div
          className="shadow rounded-md p-4 max-w-full w-[75%] border-b-2 border-slate-600 "
          key={index}
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-slate-700 h-60 w-[45%]" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded" />
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2 " />
                  <div className="h-2 bg-slate-700 rounded col-span-1" />
                </div>
                <div className="h-2 bg-slate-700 rounded" />
                <div className="h-2 bg-slate-700 rounded" />
                <div className="h-2 bg-slate-700 rounded" />
                <div className="h-2 bg-slate-700 rounded" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2" />
                  <div className="h-2 bg-slate-700 rounded col-span-1" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-700 rounded col-span-2" />
                <div className="h-2 bg-slate-700 rounded col-span-1" />
              </div>
              <div className="h-2 bg-slate-700 rounded" />
              <div className="h-2 bg-slate-700 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
