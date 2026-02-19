import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { add, remove } from "../../store/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const products = useSelector(state => state.cart || []);
    
    const handleIncrement = (product) => {
        dispatch(add(product));
    };

    const handleDecrement = (product) => {
        if (product.quantity > 1) {
            console.log('Decrement quantity for:', product.id);
        } else {
            dispatch(remove(product.id));
        }
    };

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };

    // Calculate totals
    const totalMRP = products?.reduce?.((total, product) => 
        total + (product.price * (product.quantity || 1)), 0
    ) || 0;

    const totalItems = products?.reduce?.((total, product) => 
        total + (product.quantity || 1), 0
    ) || 0;

    // Button hover states
    const [hoveredCheckout, setHoveredCheckout] = React.useState(false);
    const [hoveredContinue, setHoveredContinue] = React.useState(false);
    const [hoveredShop, setHoveredShop] = React.useState(false);
    const [qtyHover, setQtyHover] = React.useState({});
    const [removeHover, setRemoveHover] = React.useState({});

    // Calculate delivery dates
    const today = new Date();
    const deliveryStart = new Date(today);
    deliveryStart.setDate(today.getDate() + 3);
    const deliveryEnd = new Date(today);
    deliveryEnd.setDate(today.getDate() + 5);
    
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { 
            day: '2-digit', 
            month: '2-digit', 
            year: 'numeric' 
        }).replace(/\//g, '.');
    };

    return (
        <>
            <style>{`
                .cart-page {
                    background-color: #282c34;
                    min-height: 100vh;
                    box-sizing: border-box;
                    width: 100%;
                    color: #fff;
                    padding: 2rem;
                    overflow-x: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .cart-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }
                .cart-header h1 {
                    font-weight: bold;
                    color: #fff;
                    margin: 0;
                    font-size: 2.5rem;
                    line-height: 1.2;
                }
                .cart-header hr {
                    height: 4px;
                    width: 60px;
                    border-radius: 9999px;
                    background-color: #6B7280;
                    margin: 16px auto;
                    border: none;
                }

                .cart-layout {
                    display: flex;
                    flex-direction: row;
                    gap: 2rem;
                    max-width: 1400px;
                    margin: 0 auto;
                    width: 100%;
                    flex: 1;
                }

                .cart-items-container {
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding-right: 10px;
                    max-height: calc(100vh - 250px);
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: #4b5563 #1f2937;
                }
                .cart-items-container::-webkit-scrollbar {
                    width: 6px;
                }
                .cart-items-container::-webkit-scrollbar-track {
                    background: #1f2937;
                    border-radius: 10px;
                }
                .cart-items-container::-webkit-scrollbar-thumb {
                    background: #4b5563;
                    border-radius: 10px;
                }
                .cart-items-container::-webkit-scrollbar-thumb:hover {
                    background: #6b7280;
                }

                .cart-item {
                    background-color: #1f2937;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: row;
                    border: 1px solid #374151;
                    overflow: hidden;
                    transition: none;
                    transform: none;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                    cursor: default;
                    flex-shrink: 0;
                    width: 100%;
                }

                .cart-item-image {
                    width: 180px;
                    height: 200px;
                    background-color: #1f2937;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 15px;
                    box-sizing: border-box;
                    border-right: 1px solid #374151;
                }
                .cart-item-image-inner {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #111827;
                    border-radius: 8px;
                    padding: 10px;
                    box-sizing: border-box;
                }
                .cart-item-image-inner img {
                    max-width: 90%;
                    max-height: 90%;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                }

                .cart-item-details {
                    flex: 1;
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .cart-item-title {
                    font-size: 1.1rem;
                    margin: 0 0 0.5rem 0;
                    color: #fff;
                    line-height: 1.4;
                }
                .cart-item-unit-price {
                    color: #9ca3af;
                    font-size: 0.85rem;
                    margin: 0 0 1rem 0;
                }

                .cart-item-quantity {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    flex-wrap: wrap;
                }
                .qty-selector {
                    display: flex;
                    align-items: center;
                    background-color: #374151;
                    border-radius: 50px;
                    padding: 4px;
                }
                .qty-btn {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: 1px solid rgba(255,255,255,0.2);
                    background: transparent;
                    color: #fff;
                    font-size: 1.1rem;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    outline: none;
                }
                .qty-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .qty-btn:hover:not(:disabled) {
                    border-color: rgba(255,255,255,0.4);
                    background: rgba(255,255,255,0.1);
                }
                .qty-value {
                    width: 30px;
                    text-align: center;
                    font-weight: bold;
                    color: #fff;
                }

                .remove-btn {
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-size: 14px;
                    position: relative;
                    overflow: hidden;
                    background: transparent;
                    border: 1px solid rgba(255,255,255,0.2);
                    cursor: pointer;
                    outline: none;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }
                .remove-btn span {
                    position: relative;
                    z-index: 11;
                    color: #fff;
                    transition: color 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .remove-btn::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: #ef4444;
                    left: 0;
                    bottom: -100%;
                    border-radius: 50%;
                    transition: all ease 0.4s;
                    z-index: 9;
                }
                .remove-btn:hover::after {
                    bottom: 0;
                    border-radius: 0;
                }
                .remove-btn:hover span {
                    color: #fff !important;
                }

                .cart-item-price {
                    padding: 1.5rem;
                    text-align: right;
                    min-width: 120px;
                    border-left: 1px solid #374151;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .price-label {
                    color: #9ca3af;
                    font-size: 0.8rem;
                    margin-bottom: 4px;
                }
                .price-value {
                    font-size: 1.3rem;
                    font-weight: bold;
                    color: #fff;
                }
                .price-each {
                    color: #9ca3af;
                    font-size: 0.75rem;
                    margin-top: 4px;
                }

                .cart-summary-column {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    width: 100%;
                }

                .summary-card {
                    background-color: #1f2937;
                    border-radius: 12px;
                    padding: 1.5rem;
                    border: 1px solid #374151;
                    width: 100%;
                    box-sizing: border-box;
                }
                .summary-card h2, .summary-card h3 {
                    font-family: 'Courier New', sans-serif;
                    border-bottom: 1px solid #374151;
                    padding-bottom: 0.75rem;
                    margin-bottom: 1.5rem;
                    color: #fff;
                }
                .summary-card h2 {
                    font-size: 1.3rem;
                }
                .summary-card h3 {
                    font-size: 1.1rem;
                    margin-bottom: 1rem;
                }

                .price-breakdown {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    margin-bottom: 1.5rem;
                }
                .price-row {
                    display: flex;
                    justify-content: space-between;
                }
                .price-row span:first-child {
                    color: #9ca3af;
                    font-size: 1rem;
                }
                .price-row span:last-child {
                    color: #fff;
                    font-size: 1rem;
                }
                .shipping-free {
                    color: #10b981 !important;
                    font-weight: 600;
                }

                .total-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }
                .total-label {
                    font-weight: bold;
                    font-size: 1.1rem;
                }
                .total-amount {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                }

                .checkout-btn {
                    width: 100%;
                    padding: 14px 24px;
                    border-radius: 50px;
                    font-size: 16px;
                    font-weight: 600;
                    position: relative;
                    overflow: hidden;
                    background: transparent;
                    border: 2px solid #4E4F54;
                    cursor: pointer;
                    outline: none;
                    transition: all 0.3s ease;
                    text-align: center;
                    display: inline-block;
                }
                .checkout-btn span {
                    position: relative;
                    z-index: 11;
                    color: #fff;
                    transition: color 0.3s ease;
                    font-weight: bold;
                    font-size: 16px;
                }
                .checkout-btn::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    left: 0;
                    bottom: -100%;
                    border-radius: 50%;
                    transition: all ease 0.4s;
                    z-index: 9;
                }
                .checkout-btn:hover::after {
                    bottom: 0;
                    border-radius: 0;
                }
                .checkout-btn:hover span {
                    color: #000;
                }

                .continue-link {
                    display: block;
                    text-align: center;
                    margin-top: 1rem;
                    color: #9ca3af;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.3s ease;
                }
                .continue-link:hover {
                    color: #fff;
                }

                .delivery-date {
                    font-size: 1.3rem;
                    font-weight: bold;
                    color: #fff;
                    margin-bottom: 0.5rem;
                }
                .delivery-note {
                    color: #9ca3af;
                    font-size: 0.8rem;
                    margin: 0.5rem 0 0 0;
                }

                .payment-icons {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }
                .payment-icons img {
                    height: 32px;
                    width: auto;
                    object-fit: contain;
                    background-color: #fff;
                    padding: 6px 12px;
                    border-radius: 6px;
                }

                .empty-cart {
                    text-align: center;
                    padding: 3rem 1rem;
                    max-width: 600px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    flex: 1;
                    min-height: 60vh;
                }
                .empty-cart-icon {
                    margin-bottom: 2rem;
                }
                .empty-cart-icon img {
                    height: 140px;
                   
                    opacity: 0.8;
                }
                .empty-cart h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #fff;
                    font-weight: 600;
                }
                .empty-cart p {
                    color: #9ca3af;
                    margin-bottom: 2.5rem;
                    font-size: 1.2rem;
                    max-width: 450px;
                    line-height: 1.6;
                }
                .shop-btn {
                    padding: 14px 40px;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    position: relative;
                    overflow: hidden;
                    background: transparent;
                    border: 2px solid rgba(255,255,255,0.3);
                    cursor: pointer;
                    outline: none;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    display: inline-block;
                }
                .shop-btn span {
                    position: relative;
                    z-index: 11;
                    color: #fff;
                    transition: color 0.3s ease;
                    font-weight: bold;
                }
                .shop-btn::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: white;
                    left: 0;
                    bottom: -100%;
                    border-radius: 50%;
                    transition: all ease 0.4s;
                    z-index: 9;
                }
                .shop-btn:hover::after {
                    bottom: 0;
                    border-radius: 0;
                }
                .shop-btn:hover span {
                    color: #000;
                }

                /* ----- RESPONSIVE MEDIA QUERIES ----- */
                @media (max-width: 1024px) {
                    .cart-page {
                        padding: 1.5rem;
                    }
                    .cart-layout {
                        flex-direction: column;
                        gap: 1.75rem;
                    }
                    .cart-items-container {
                        max-height: none;
                        overflow-y: visible;
                        padding-right: 0;
                    }
                    .cart-summary-column {
                        flex: auto;
                    }
                    .empty-cart {
                        min-height: 50vh;
                        padding: 2rem 1rem;
                    }
                }

                @media (max-width: 768px) {
                    .cart-page {
                        padding: 1rem;
                    }
                    .cart-header h1 {
                        font-size: 2rem;
                    }
                    .cart-header hr {
                        width: 50px;
                        margin: 12px auto;
                    }
                    .cart-item {
                        flex-direction: column;
                    }
                    .cart-item-image {
                        width: 100%;
                        height: 180px;
                        border-right: none;
                        border-bottom: 1px solid #374151;
                    }
                    .cart-item-details {
                        padding: 1rem;
                    }
                    .cart-item-title {
                        font-size: 0.95rem;
                    }
                    
                    .cart-item-price {
                        padding: 0.75rem 1rem 1rem 1rem;
                        text-align: left;
                        min-width: auto;
                        border-left: none;
                        border-top: 1px solid #374151;
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    .price-label {
                        margin-bottom: 0;
                    }
                    .qty-btn {
                        width: 28px;
                        height: 28px;
                        font-size: 1rem;
                    }
                    .qty-value {
                        width: 25px;
                        font-size: 0.9rem;
                    }
                    .remove-btn {
                        padding: 6px 16px;
                        font-size: 12px;
                    }
                    .payment-icons {
                        justify-content: center;
                    }
                    .payment-icons img {
                        height: 28px;
                        padding: 4px 10px;
                    }
                    .empty-cart h2 {
                        font-size: 2rem;
                    }
                    .empty-cart p {
                        font-size: 1rem;
                        padding: 0 1rem;
                    }
                    .empty-cart-icon img {
                        height: 100px;
                        width: 100px;
                    }
                }

                @media (max-width: 640px) {
                    .cart-header h1 {
                        font-size: 1.75rem;
                    }
                    .summary-card {
                        padding: 1.25rem;
                    }
                    .summary-card h2 {
                        font-size: 1.2rem;
                    }
                    .summary-card h3 {
                        font-size: 1rem;
                    }
                    .delivery-date {
                        font-size: 1.1rem;
                    }
                    .total-amount {
                        font-size: 1.3rem;
                    }
                    .checkout-btn {
                        padding: 12px 20px;
                        font-size: 14px;
                    }
                    .payment-icons img {
                        height: 24px;
                        padding: 4px 8px;
                    }
                    .empty-cart h2 {
                        font-size: 1.75rem;
                    }
                    .shop-btn {
                        padding: 12px 32px;
                        font-size: 1rem;
                    }
                }

                @media (max-width: 480px) {
                    .empty-cart {
                        min-height: 40vh;
                    }
                    .empty-cart h2 {
                        font-size: 1.5rem;
                    }
                    .empty-cart p {
                        font-size: 0.95rem;
                    }
                    .empty-cart-icon img {
                        height: 80px;
                        width: 80px;
                    }
                }
            `}</style>

            <div className="cart-page">
                <div className="cart-header"
                style={{
                    textTransform: "uppercase",
                    fontFamily: 'Courier New',
                }}>
                    <h1>Shopping Cart</h1>
                    <hr />
                </div>

                {products?.length > 0 ? (
                    <div className="cart-layout">
                        <div className="cart-items-container">
                            {products.map(product => {
                                const isDecrementHovered = qtyHover[`decrement-${product.id}`];
                                const isIncrementHovered = qtyHover[`increment-${product.id}`];
                                const isRemoveHovered = removeHover[product.id];
                                return (
                                    <div key={product.id} className="cart-item">
                                        <div className="cart-item-image">
                                            <div className="cart-item-image-inner">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                        </div>
                                        <div className="cart-item-details">
                                            <div>
                                                <h3 style={{
                                                    fontFamily: 'Oswald',
                                                }} className="cart-item-title">{product.title}</h3>
                                                <p className="cart-item-unit-price"
                                                style={{
                                                    fontFamily: 'Oswald',
                                                }}
                                                >
                                                    Unit Price: ${product.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <div className="cart-item-quantity">
                                                <div style={{
                                                    fontFamily: 'Oswald',
                                                }} className="qty-selector">
                                                    <button
                                                        className="qty-btn"
                                                        onClick={() => handleDecrement(product)}
                                                        disabled={product.quantity <= 1}
                                                        onMouseEnter={() => {
                                                            if (product.quantity > 1) {
                                                                setQtyHover(prev => ({ ...prev, [`decrement-${product.id}`]: true }));
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            setQtyHover(prev => ({ ...prev, [`decrement-${product.id}`]: false }));
                                                        }}
                                                        style={{
                                                            backgroundColor: isDecrementHovered && product.quantity > 1 ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                            borderColor: isDecrementHovered && product.quantity > 1 ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
                                                        }}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="qty-value">{product.quantity || 1}</span>
                                                    <button
                                                        className="qty-btn"
                                                        onClick={() => handleIncrement(product)}
                                                        onMouseEnter={() => {
                                                            setQtyHover(prev => ({ ...prev, [`increment-${product.id}`]: true }));
                                                        }}
                                                        onMouseLeave={() => {
                                                            setQtyHover(prev => ({ ...prev, [`increment-${product.id}`]: false }));
                                                        }}
                                                        style={{
                                                            backgroundColor: isIncrementHovered ? 'rgba(255,255,255,0.1)' : 'transparent',
                                                            borderColor: isIncrementHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.2)'
                                                        }}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    className="remove-btn"
                                                    onClick={() => handleRemove(product.id)}
                                                    onMouseEnter={() => setRemoveHover(prev => ({ ...prev, [product.id]: true }))}
                                                    onMouseLeave={() => setRemoveHover(prev => ({ ...prev, [product.id]: false }))}
                                                >
                                                    <span>
                                                        <span style={{ fontSize: '1.1rem' }}>🗑️</span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="cart-item-price">
                                            <div style={{
                                                    fontFamily: 'Oswald',
                                                }} className="price-label">Subtotal</div>
                                            <div style={{
                                                    fontFamily: 'Oswald',
                                                }} className="price-value">
                                                ${(product.price * (product.quantity || 1)).toFixed(2)}
                                            </div>
                                            {product.quantity > 1 && (
                                                <div className="price-each">
                                                    ${product.price.toFixed(2)} each
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="cart-summary-column">
                            <div className="summary-card">
                                <h2>Order Summary</h2>
                                <div className="price-breakdown">
                                    <div className="price-row">
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }}>Items ({totalItems}):</span>
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }}>${totalMRP.toFixed(2)}</span>
                                    </div>
                                    <div className="price-row">
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }}>Shipping:</span>
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }} className="shipping-free">FREE</span>
                                    </div>
                                    <div className="price-row">
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }}>Platform Fee:</span>
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }}>$20.00</span>
                                    </div>
                                </div>
                                <div style={{ borderTop: '1px solid #374151', paddingTop: '1rem' }}>
                                    <div className="total-row">
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }} className="total-label">Total Amount:</span>
                                        <span style={{
                                                    fontFamily: 'Oswald',
                                                }} className="total-amount">${(totalMRP + 20).toFixed(2)}</span>
                                    </div>
                                    <button
                                        className="checkout-btn"
                                        onClick={() => navigate('/checkout')}
                                        onMouseEnter={() => setHoveredCheckout(true)}
                                        onMouseLeave={() => setHoveredCheckout(false)}
                                    >
                                        <span style={{ color: hoveredCheckout ? '#000' : '#fff', fontFamily: 'Oswald', }}>
                                            Proceed to Checkout
                                        </span>
                                    </button>
                                    <Link
                                        to="/"
                                        className="continue-link"
                                        onMouseEnter={() => setHoveredContinue(true)}
                                        onMouseLeave={() => setHoveredContinue(false)}
                                        style={{ color: hoveredContinue ? '#fff' : '#9ca3af', fontFamily: 'Oswald' }}
                                    >
                                        ← Continue Shopping
                                    </Link>
                                </div>
                            </div>
                            <div className="summary-card">
                                <h3>Expected Shipping Delivery</h3>
                                <div className="delivery-date"
                                                                style={{
                                                    fontFamily: 'Oswald',
                                                }}>
                                    {formatDate(deliveryStart)} - {formatDate(deliveryEnd)}
                                </div>
                            </div>
                            <div className="summary-card">
                                <h3>We Accept</h3>
                                <div className="payment-icons">
                                    <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                                    <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
                                    <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                                    <img src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark" />
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="empty-cart">
                        <div className="empty-cart-icon">
                            <img 
                                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" 
                                alt="Empty cart" 
                            />
                        </div>
                        <h2 style={{
                            fontFamily: 'Oswald',
                        }}>
                            Your cart is empty
                        </h2>
                        <p style={{
                            fontFamily: 'MyCustomFont-Regular',
                            fontSize: '1.2rem',
                        }}>
                            Looks like you haven't added any products to your cart yet.
                        </p>
                        <Link
                            to="/"
                            className="shop-btn"
                            onMouseEnter={() => setHoveredShop(true)}
                            onMouseLeave={() => setHoveredShop(false)}
                        >
                            <span style={{ 
                                color: hoveredShop ? '#000' : '#fff',
                                fontFamily: 'Oswald',
                            }}>
                                Continue Shopping
                            </span>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;