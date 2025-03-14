import About from "./About";

function App() {
  const username = "Rajan Shrestha";
  return (
    <>
      {/* evaluated js expressions */}
      <h1>Hello World! | {username}</h1>
      <About />
    </>
  );
}
export default App;
