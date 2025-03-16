import React from "react";
// import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <Login />
      <Profile/>
    </UserContextProvider>
  );
};

export default App;
