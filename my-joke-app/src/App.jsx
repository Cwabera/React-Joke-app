import React, { useState, useEffect } from "react";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Oops! Could not fetch a joke.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Programming Joke</h1>
      {loading ? <p>Loading...</p> : <p>{joke}</p>}
      <button onClick={fetchJoke} style={{ marginTop: "20px" }}>
        Get New Joke
      </button>
    </div>
  );
}

export default App;