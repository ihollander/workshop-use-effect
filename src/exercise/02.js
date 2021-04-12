import { useState, useEffect } from "react";

// using localStorage

function App() {
  // ✅ update the initial state for text to read a value using localStorage.getItem("text")
  const initialText = localStorage.getItem("text1");
  const [text, setText] = useState(initialText);
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Running side effect");

    localStorage.setItem("text1", text);
  }, [text]);

  console.log("Rendering component");

  return (
    <div>
      <label>
        Text:
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <button onClick={() => setCount(count => count + 1)}>{count}</button>
    </div>
  );
}

export default App;
