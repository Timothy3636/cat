import { useState, useEffect } from 'react';

function TopTen() {
  const [topBreeds, setTopBreeds] = useState([]);

  useEffect(() => {
    const fetchTopBreeds = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      const data = await response.json();
      setTopBreeds(data);
    };
    fetchTopBreeds();
  }, []);

  return (
    <div className="App">
      <h2>Top 10 Most Searched Cat Breeds</h2>
      <ul>
        {topBreeds.map((breed) => (
          <li key={breed.id}>
            <img src={breed.url} alt={breed.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopTen;
