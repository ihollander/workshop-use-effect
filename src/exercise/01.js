import { useEffect, useState } from "react";

function App() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://dog.ceo/api/breeds/image/random/8")
      .then(r => r.json())
      .then(data => {
        console.log("Data fetched!", data);
        // data is an object with a key of message, which has an array of images
        setPics(data.message);
      });
  }, []);

  console.log("Component rendering");

  return (
    <div style={{ padding: "16px" }}>
      <h1>Dog Pics</h1>
      <DogPics pics={pics} />
    </div>
  );
}

// 🚫 no need to touch the code for this component!

function DogPics({ pics }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {pics.map(pic => (
        <img
          key={pic}
          style={{ width: "100%" }}
          src={pic}
          alt="A random dog from the internet"
        />
      ))}
    </div>
  );
}

export default App;
