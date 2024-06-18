import React, { useState } from 'react';
import axios from 'axios';
import Categorieslist from './Categorieslist'; 
import logo from './assets/Logo.jpg'
import DeleteButton from './DeleteButton';

function App () {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const handleLoadProducts = () => {
    if (products.length === 0) {
      setIsLoadingProducts(true);
      axios.get('https://dummyjson.com/products')
        .then(res => {
          setProducts(res.data.products);
        })
        .catch(error => console.error('Error fetching data:', error))
        .finally(() => setIsLoadingProducts(false));
    } else {
      setProducts([]);
    }
  };

  const handleSearch = () => {
    if (!searchInput) {
      setResults([<p key="no-results">Please enter a search term.</p>]);
      return;
    }

    axios.get(`https://dummyjson.com/products/search?q=${(searchInput)}`)
      .then(response => {
        const data = response.data;
        if (data.products.length === 0) {
          setResults([<p key="no-results">No results found.</p>]);
        } else {
          setResults(data.products.map(product => (
            <div key={product.id} className="product boxes">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} />
            </div>
          )));
        }
      })
      .catch(error => {
        setResults([<p key="error">Error fetching data. Please try again later.</p>]);
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <header>
        <nav>
          <div className="left"><img src={logo} alt="Logo" id="logo" /></div>
          <div className="right">
            <button onClick={handleLoadProducts} disabled={isLoadingProducts}>Get all Products</button>
            <input
              type="search"
              id="search-input"
              placeholder="Search for products"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </nav>
      </header>
      <h1>-:Products:-</h1>
      <Categorieslist/>
      <div id="product-list" className="one">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="boxes">
              <h2>{product.title}</h2>
              <p><strong>Description:- </strong>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} />
              <DeleteButton/>
            </div>
          </div>
        ))}
      </div>
      {results.length > 0 && (
        <div id="results">
          {results}
        </div>
      )}
    </div>
  );
};

export default App;
