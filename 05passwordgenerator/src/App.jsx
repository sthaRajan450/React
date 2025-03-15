import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()-_=+[]{};:/?.";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
      <h2 className="text-center text-white text-3xl mb-3">
        Password Generator
      </h2>

      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          className="bg-white w-full p-4"
          type="text"
          placeholder="password"
          readOnly
          value={password}
          ref={passwordRef}
        />
        <button
          className="bg-blue-500 text-white p-4"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex justify-between items-center">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(parseInt(e.target.value, 10))}
        />
        <label>Length ({length})</label>

        <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="numberInput">Numbers</label>

        <input
          type="checkbox"
          checked={charAllowed}
          id="characterInput"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
  );
}

export default App;
