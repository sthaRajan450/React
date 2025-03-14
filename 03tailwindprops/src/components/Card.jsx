import React from "react";

const Card = ({ person, btnText = "Default Value" }) => {
  return (
    <div
      className="w-[400px] rounded-4xl  h-[400px] overflow-hidden m-6 bg-cover bg-center relative "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D')",
      }}
    >
      <div className="p-6 text-white absolute bottom-0 flex  flex-col w-full  items-center text-center  ">
        <h2 className="text-xl font-bold ">{person.name}</h2>
        <p className="text-sm">{person.description}</p>
        <button className="bg-zinc-900 text-white px-3 py-1 rounded-2xl cursor-pointer m-2">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default Card;
