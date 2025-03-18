import React from "react";
import AddTodo from "./components/AddTodo";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Todos from "./components/Todos";
const App = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mb-4">Learn redux toolkit</h1>
      <Provider store={store}>
        <AddTodo />
        <Todos/>
      </Provider>
    </div>
  );
};

export default App;
