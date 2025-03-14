import { useState } from "react";

function App() {
  // useState is a hook that allows functional components to have state.
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count < 20) setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <>
      <button onClick={increment}>Add</button>
      <h1>Count:{count}</h1>
      <button onClick={decrement}>Subtract</button>
    </>
  );
}
export default App;
