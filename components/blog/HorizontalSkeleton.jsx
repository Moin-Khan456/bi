import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3">
      {[1, 2, 3].map((_, index) => (
        <div
          className="shadow rounded-md p-4 max-w-full w-full"
          key={index}
        >
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-md bg-slate-700 h-60 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
