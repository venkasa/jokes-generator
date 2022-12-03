import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  const [query, setQuery] = useState("teeth");

  useEffect(() => {
    getResults();
  });

  const getResults = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${query}`
    );
    setJokes(response.data.result);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getResults();
  };

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
      <button type="submit">search</button>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </form>
      <p>
        {jokes.map((joke) => {
          return <p>{joke.value}</p>;
        })}
      </p>
    </div>
  );
}

export default App;
