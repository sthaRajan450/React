import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/sthaRajan450")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  return (
    <div className="bg-gray-600 text-3xl text-white text-center flex items-center justify-around p-4">
      <img
        className="h-[300px} w-[300px] rounded-3xl"
        src={data.avatar_url}
        alt=""
      />
      <h1>Github Followers: {data.followers}</h1>
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sthaRajan450");
  return response.json();
};
