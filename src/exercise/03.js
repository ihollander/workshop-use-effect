import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("yolo");
  const [filter, setFilter] = useState("sepia");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(`https://cataas.com/cat/says/${text}?filter=${filter}&json=true`)
      .then(response => response.json())
      .then(data => {
        setImage(data.url);
      });
  }, []);
  // ✅ update the dependencies array!
  // read the warning message (either hover over the [] in VSCode, or look in the console in chrome)
  // add any dependency variables to this array

  // 🚫 no need to update the code below here

  function handleSubmit({ text, filter }) {
    setText(text);
    setFilter(filter);
  }

  return (
    <div className="App">
      <CatPicForm
        onSubmit={handleSubmit}
        initialText={text}
        initialFilter={filter}
      />
      {image && <img src={image} alt={`A cat saying ${text}`} />}
    </div>
  );
}

const filters = ["", "blur", "mono", "sepia", "negative", "paint", "pixel"];

function CatPicForm({ initialText, initialFilter, onSubmit }) {
  const [text, setText] = useState(initialText);
  const [filter, setFilter] = useState(initialFilter);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ text, filter });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "20px auto",
      }}
    >
      <label htmlFor="text">Text</label>
      <textarea
        id="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <label htmlFor="filter">Filter</label>
      <select
        id="filter"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        {filters.map(filter => (
          <option key={filter} value={filter}>
            {filter === "" ? "(none)" : filter}
          </option>
        ))}
      </select>
      <button type="submit">Cat Me</button>
    </form>
  );
}

export default App;
