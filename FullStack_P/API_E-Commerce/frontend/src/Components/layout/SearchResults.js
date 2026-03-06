import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { data: allProducts, loading } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query && allProducts.length > 0) {
      const results = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  }, [query, allProducts]);

  if (loading) {
    return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Loading search results...</div>;
  }

  return (
    <div style={{ padding: '100px 5vw', fontFamily: 'Courier New, monospace' }}>
      <h1 style={{ marginBottom: '40px' }}>
        Search Results for: <span style={{ color: '#60a5fa' }}>"{query}"</span>
      </h1>
      {filteredProducts.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit', border: '1px solid #374151', padding: '15px', borderRadius: '8px', width: '250px', background: '#1f2937' }}>
              <img 
                src={product.image} 
                alt={product.title} 
                style={{ width: '100%', height: '200px', objectFit: 'contain', background: 'white', borderRadius: '4px' }} 
              />
              <h4 style={{ marginTop: '15px', minHeight: '40px' }}>{product.title}</h4>
              <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#60a5fa' }}>${product.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <p>No products found matching your search criteria.</p>
      )}
    </div>
  );
};

export default SearchResults;