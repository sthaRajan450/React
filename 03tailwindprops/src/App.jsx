import React from "react";
import Card from "./components/Card";

const App = () => {
  const person1 = {
    name: "Alexa Johson",
    description: "She is a Django Developer ",
  };
  const person2 = {
    name: "Sila Johson",
    description: "She is a Mern stack Developer ",
  };
  return (
    <div className="flex flex-col items-center w-full ">
      <h1 className=" bg-amber-800 text-white text-center m-3 rounded-2xl  font-bold p-4">
        Tailwindcss and props
      </h1>
      <Card person={person1} btnText="Click me" />
      <Card person={person2} />
    </div>
  );
};

export default App;
