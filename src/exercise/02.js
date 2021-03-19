import { useState, useEffect } from "react";

// extra credit! return text
// what is localStorage!

function App() {
  const [text, setText] = useState(() => {
    const initialState = localStorage.getItem("text") || "";
    return initialState;
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("text", text);
    console.log("Running side effect");
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
