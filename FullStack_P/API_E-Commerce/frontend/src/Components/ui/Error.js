import React from "react";

const Error = (props) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#282C34] text-white gap-4">
      <h1 className="text-red-500 text-2xl font-bold">
        Error: {props.error?.message}
      </h1>
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium rounded-lg shadow-md cursor-pointer text-base"
        onClick={() => {props.retry()}}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
