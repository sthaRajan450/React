import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      className={`w-full h-screen text-white relative flex flex-col items-center justify-center bg-${color}-500`}
    >
      <div className="flex justify-around absolute bottom-20 flex-wrap w-full bg-amber-50 p-3 m-10 rounded-3xl">
        <button
          onClick={() => setColor("red")}
          className="m-2 cursor-pointer bg-red-600 px-2 py-1 rounded-2xl w-24"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="m-2 cursor-pointer bg-green-600 px-2 py-1 rounded-2xl w-24"
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="m-2 cursor-pointer bg-blue-600 px-2 py-1 rounded-2xl w-24"
        >
          Blue
        </button>

        <button
          onClick={() => setColor("gray")}
          className="m-2 cursor-pointer bg-gray-600 px-2 py-1 rounded-2xl w-24"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="m-2 cursor-pointer text-black bg-yellow-600 px-2 py-1 rounded-2xl w-24"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("pink")}
          className="m-2 cursor-pointer text-black bg-pink-600 px-2 py-1 rounded-2xl w-24"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("purple")}
          className="m-2 cursor-pointer text-black bg-purple-600 px-2 py-1 rounded-2xl w-24"
        >
          Purple
        </button>

        <button
          onClick={() => setColor("white")}
          className="m-2 cursor-pointer text-black bg-white px-2 py-1 rounded-2xl w-24 border border-gray-400"
        >
          White
        </button>
        <button
          onClick={() => setColor("black")}
          className="m-2 cursor-pointer text-white bg-zinc-900 px-2 py-1 rounded-2xl w-24"
        >
          Black
        </button>
      </div>
    </div>
  );
};

export default App;
