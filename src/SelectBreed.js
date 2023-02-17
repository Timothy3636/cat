import { useState, useEffect } from 'react';

function SelectBreed() {

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedCatBreed, setSelectedCatBreed] = useState(null);


  useEffect(() => {
    
    console.log("fetchCategories start")
    const fetchCategories = async () => {
      const response = await fetch('https://api.thecatapi.com/v1/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
    console.log("fetchCategories end")
  }, []);


  const handleSelect = (event) => {
    console.log("handleSelect="+event.target.value)
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
  };

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoriesBreed, setSelectedCategoriesBreed] = useState(null);


  useEffect(() => {
    console.log("fetchBreeds start")
    const fetchBreeds = async () => {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
      const data = await response.json();
      setBreeds(data);
    };
    fetchBreeds();
  }, [searchTerm]);

  const handleSearch = (event) => {
    console.log("handleSearch="+event.target.value)
    setSearchTerm(event.target.value);
  };

  // After 90 minutes start

  // TO clarify: where is Categories list?

  useEffect(() => {
    const fetchSelectBreedCategories = async () => {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedCategory}`);
      console.log("selectedCategory start="+selectedCategory) ;
      const data = await response.json();
      setSelectedCategoriesBreed(data);
    };
    fetchSelectBreedCategories();
  }, [selectedCategory]);
  //   // end 90 minutes start
  

  return (
    <div>
      <h1>Categories</h1>

      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for a cat breed" />
      <button onClick={handleSearch}>Search</button>

      &nbsp;

      <select onChange={handleSelect} >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.value}>
            {category.name}
          </option>
        ))}
      </select>
      
      {selectedCategory && (
        <div>
          <h2>Category: {selectedCategory}</h2>
          <p>Display cat images for the selected category here</p>
          {/* After 90 mins start */}

          {console.log("selectedCategoriesBreed breed")}
          {
          selectedCategoriesBreed.map((breed) => (
            <div key={breed.id}>
              <img src={breed.url} alt={breed.id} width={breed.width} height={breed.height} />
            </div>
            
          ))}
          {/* After 90 mins end */}
        </div>
      )}


      {breeds.map((breed) => (
          <div key={breed.id}>
            <img src={breed.url} alt={breed.id} width={breed.width} height={breed.height} />
          </div>
        ))}



      
    </div>
  );
}

export default SelectBreed;
