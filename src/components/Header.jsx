import React from "react";

export default function Header() {
  return (
    <div className="max-w-7xl w-full mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Todo List
        </h2>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Organize Everything With Todo List
        </p>
      </div>
    </div>
  );
}
