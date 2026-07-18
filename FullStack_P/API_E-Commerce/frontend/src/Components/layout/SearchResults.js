import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSearchQuery } from '../../hooks/useProducts';
import PrimaryTogglePagination from '../primary-toggle-pagination'; 

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Pagination state
  const [page, setPage] = useState(1);
  const limit = 30; // or whatever you prefer
  const skip = (page - 1) * limit;

  const { data, isLoading, isError, error } = useSearchQuery(query, limit, skip);
  const products = data?.products ?? [];
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / limit);

  if (isLoading) {
    return <div style={{ padding: '100px 20px', textAlign: 'center' }}>Loading search results...</div>;
  }

  if (isError) {
    return <div style={{ padding: '100px 20px', textAlign: 'center', color: 'red' }}>Error: {error.message}</div>;
  }

  if (products.length === 0) {
    return (
      <div style={{ padding: '100px 5vw', fontFamily: 'Courier New, monospace' }}>
        <h1>Search Results for: <span style={{ color: '#60a5fa' }}>"{query}"</span></h1>
        <p>No products found matching your search criteria.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '100px 5vw', fontFamily: 'Courier New, monospace' }}>
      <h1 style={{ marginBottom: '40px' }}>
        Search Results for: <span style={{ color: '#60a5fa' }}>"{query}"</span>
        <span style={{ fontSize: '1rem', color: '#9ca3af', marginLeft: '1rem' }}>
          ({totalItems} results)
        </span>
      </h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #374151',
              padding: '15px',
              borderRadius: '8px',
              width: '250px',
              background: '#1f2937',
            }}
          >
            <img
              src={product.thumbnail || product.image} // use thumbnail if available
              alt={product.title}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                background: 'white',
                borderRadius: '4px',
              }}
            />
            <h4 style={{ marginTop: '15px', minHeight: '40px' }}>{product.title}</h4>
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#60a5fa' }}>
              ${product.price}
            </p>
          </Link>
        ))}
      </div>

      {/* Optional pagination */}
      <PrimaryTogglePagination
        currentPage={page}
        totalPages={totalPages}
        itemsPerPage={limit}
        totalItems={totalItems}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default SearchResults;