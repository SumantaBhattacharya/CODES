import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice.js';
import { useProductQuery } from '../hooks/useProducts.js';

import { Loader } from './ui/Loader.js';
import Error from './ui/Error.js';
import EmptyProductsState from './ui/EmptyProductsState .js';

import ReviewComponent from './layout/ReviewComponent.js';

const ProductDts = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { productId } = useParams();
    const [searchParams] = useSearchParams();
    
    const limit = Number(searchParams.get('limit')) ?? 30;
    const skip = Number(searchParams.get('skip')) ?? 0;

    const [width, setWidth] = useState(window.innerWidth);

    const { data: product, isLoading, isError, error, refetch } = useProductQuery(productId, limit, skip);

    // Responsive width tracking
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const isMobile = width < 768;

    // Loading state
    if (isLoading) {
        return (
            <Loader />
        );
    }

    // Error state
    if (isError) {
        return (
            <Error />
        );
    }

    // Not found
    if (!product) {
        return (
            <EmptyProductsState />
        );
    }

    // Get the first image from the images array, or fallback to thumbnail
    const imageSrc = product.images?.[0] || product.thumbnail || '';

    return (
        <>
            <style>
                {`
                    button:focus-visible {
                        outline: 3px solid #fff;
                        outline-offset: 3px;
                    }
                `}
            </style>

            <div 
            style={{
                backgroundColor: '#282C34',
                minHeight: '100vh',
                boxSizing: 'border-box',
                paddingTop: isMobile ? '4vw' : '2vw',
                paddingBottom: isMobile ? '4vw' : '2vw',
                fontFamily: 'Oswald',
            }}>
                <div 
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    padding: isMobile ? '1rem' : '0 2rem'
                }}>
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/')}
                        style={{
                            backgroundColor: '#1f2937',
                            color: '#fff',
                            border: '1px solid #374151',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'Oswald',
                        }}
                    >
                        ← Back to All Products
                    </button>

                    {/* Main Product Card */}
                    <div 
                    style={{
                        backgroundColor: '#1f2937',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid #374151',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)'
                    }}>
                        {/* Product Image */}
                        <div style={{ position: 'relative' }}>
                            <img
                                src={imageSrc}
                                alt={product.title}
                                style={{
                                    width: '100%',
                                    objectFit: 'contain',
                                    backgroundColor: '#111827',
                                    padding: '2rem',
                                    height: isMobile ? '250px' : '400px',
                                }}
                            />
                        </div>

                        {/* Product Info */}
                        <div style={{ padding: isMobile ? '1.5rem' : '2rem' }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <h1 
                                style={{
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    marginBottom: '0.5rem',
                                    fontSize: isMobile ? '1.5rem' : '2rem',
                                }}>
                                    {product.title}
                                </h1>

                                <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    marginBottom: '1rem',
                                }}>
                                    <span 
                                    style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 'bold',
                                        color: '#60a5fa'
                                    }}>
                                        ${product.price.toLocaleString()}
                                    </span>

                                    {product.discountPercentage > 0 && (
                                        <span 
                                        style={{
                                            backgroundColor: '#ef4444',
                                            color: '#fff',
                                            padding: '2px 10px',
                                            borderRadius: '20px',
                                            fontSize: '0.8rem',
                                        }}>
                                            -{Math.round(product.discountPercentage)}%
                                        </span>
                                    )}

                                    <span 
                                    style={{
                                        backgroundColor: '#374151',
                                        color: '#d1d5db',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                    }}>
                                        {product.category}
                                    </span>
                                </div>

                                {/* Rating */}
                                <div 
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#fbbf24',
                                    marginBottom: '1.5rem',
                                }}>
                                    <span style={{ fontSize: '1.1rem' }}>★</span>
                                    <span style={{ fontSize: '1rem', color: '#d1d5db' }}>
                                        {product.rating} ({product.reviews?.length || 0} reviews)
                                    </span>
                                </div>

                                {/* Stock and brand */}
                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    marginBottom: '1.5rem',
                                    fontSize: '0.9rem',
                                    color: '#9ca3af',
                                }}>
                                    {product.brand && (
                                        <span>Brand: <span style={{ color: '#fff' }}>{product.brand}</span></span>
                                    )}
                                    <span>Stock: <span style={{ color: product.stock > 0 ? '#4ade80' : '#f87171' }}>
                                        {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
                                    </span></span>
                                </div>
                            </div>

                            {/* Description */}
                            <div 
                            style={{
                                backgroundColor: '#111827',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                marginBottom: '2rem',
                            }}>
                                <h3
                                 style={{
                                    fontSize: '1.2rem',
                                    color: '#fff',
                                    marginBottom: '1rem',
                                }}>
                                    Product Description
                                </h3>
                                <p
                                 style={{
                                    fontSize: '1rem',
                                    color: '#9ca3af',
                                    lineHeight: '1.6',
                                }}>
                                    {product.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div
                             style={{
                                display: 'flex',
                                flexDirection: isMobile ? 'column' : 'row',
                                alignItems: 'center',
                                gap: '12px',
                                marginTop: '32px',
                                width: isMobile ? '100%' : 'auto',
                            }}>
                                <button
                                    style={{
                                        backgroundColor: '#1f2937',
                                        color: '#fff',
                                        border: '1px solid #374151',
                                        padding: '12px 28px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        width: isMobile ? '100%' : 'auto',
                                        textAlign: 'center',
                                        boxSizing: 'border-box',
                                        transition: 'all 0.2s ease',
                                    }}
                                    role="button"
                                    onClick={() => handleAdd(product)}
                                >
                                    Add to Cart
                                </button>

                                <button
                                    style={{
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                        border: '1px solid #d1d5db',
                                        padding: '12px 28px',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        width: isMobile ? '100%' : 'auto',
                                        textAlign: 'center',
                                        boxSizing: 'border-box',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                                                <ReviewComponent
                                reviews={product.reviews}
                                productRating={product.rating}
                                totalReviews={product.reviews?.length || 0}
                            />
                </div>
            </div>
        </>
    );
};

export default ProductDts;