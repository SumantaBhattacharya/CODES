import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../store/productSlice.js";

const Products = () => {
  /*const [isProducts, setProducts] = useState([]);
  const [isError, setError] = useState("");
  const [loading, setLoading] = useState(true); // Start with true because data isn't loaded yet
  */
  // const [isAbort, setAbort] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: products,
    status,
    error,
  } = useSelector((state) => {
    return state.product;
  });

  // Responsive width tracking
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // in React, the cleanup runs after the effect runs
  // const controller = new AbortController(); // this run once once when the file loads, Once it's aborted (by timeout or unmount), it stays aborted forever.
  // let timer;

  useEffect(() => {
    // const controller = new AbortController();

    // Browsers have built-in timeouts (~5 min), let them handle it
    // const timer = setTimeout(() => {
    // timer is declared outside but defined insidet
    // controller.abort(); // ⏱️ Cancel the request after x seconds
    // setAbort(true);
    // }, 120000);

    // incomingProducts(controller.signal)
    // .finally(() => clearTimeout(timer));
    // By passing the signal as an argument, incomingProducts becomes reusable with any abort controller.

    /*return () => {
      // clearTimeout(timer);
      controller.abort(); // calling again controller.abort() wont work as that controller is now permanently aborted. If try to fetch again with the same controller, the request will immediately fail as its already aborted.
    };*/

    if (status === "idle" && products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status, products.length]); // Empty deps = run once

  /*const incomingProducts = async (signal) => {
    // AbortController is a Web API that allows you to cancel fetch requests when they're no longer needed.
    // i. when the User navigates away before fetch completes with AbortController: Request is cancelled immediately. ii. Multiple requests where only the latest matters iii. prevents from Memory leak, wasted bandwidth

    try {
      setAbort(false);
      /*setLoading(true);
      setError(""); // Clear previous errors*/
  // dispatch(setStatus('loading'));
  // dispatch(setError(null));

  // setFilteredProducts(products);
  /* fetch() only rejects/rethrows on network errors (like no internet, DNS failure). HTTP error statuses (404, 500, etc.) are NOT caught by catch—they're considered successful responses!
      // const res = await fetch("https://fakestoreapi.com/products", {
        //   signal: signal
        // signal: controller.signal,
      });*/

  // 200-299 other than ok is considered as false means we got an error from the server
  /*if (!res.ok) {
        setError(`Failed to fetch products, HTTP error! status: ${res.status}`); // we could have use object to send key value pairs for e.g., msg: "" and status: res.status
        throw new Error(
          `Failed to fetch products, HTTP error! status: ${res.status}`,
        ); // throw immediately stops execution and jumps to the catch block.
      }*/
  // once the entire file is processed then only can be use it like not process chunks as they arrive
  //const data = await res.json(); //This code only runs if res.ok is true
  // setProducts(data);
  // setFilteredProducts(data);
  /*} catch (error) {
      if (error.name === "AbortError") {
        // setError("Request timed out - taking too long. Please try again.");
        // console.log("Fetch aborted due to timeout");
        // return;
        dispatch(setError("Request timed out - taking too long. Please try again."));
      }
      // else if (error.message.includes("HTTP error")) {
        //overwrites immediately without else
        // Other errors (network, HTTP, etc.)
        // Error message already set before throw, do nothing (or keep as is)
        // setError(`Failed to fetch products ${error.message},`); // already set in !res.okUser feedback
        // console.error("Error fetching products:", error); //Goes to BROWSER CONSOLE (DevTools)
      // }
      else {
        // setError("Network error. Please check your connection.");
        dispatch(setError("Network error. Please check your connection."));
      }
    } finally {
      // setLoading(false);
      dispatch(setStatus('idle'));
      // clearTimeout(timer);
    }
  };*/

  // Retry Handler - When the user clicks Retry, it must create a brand new controller
  /*const handleRetry = () => {// The handleRetry calls incomingProducts without creating a new controller. It will use the same controller which is likely already aborted (either by timeout or unmount) as the const controller = new AbortController(); not defined isnide the use effect 
    if (status === 'loading') return; // prevent spamming

    // setError("");
    dispatch(setError(null));
    // setLoading(true);
    dispatch(setStatus('loading'));
    setAbort(false);

    // Create a NEW controller and timeout for this retry
    const controller = new AbortController();
    // const timer = setTimeout(() => {
    //    controller.abort();
    //    setAbort(true);
    // }, 120000);
   
    // Pass the new signal and clear timeout when done
    incomingProducts(controller.signal)
    // .finally(() => clearTimeout(timer));
  };*/

  // Get unique categories from the API data
  const categories = React.useMemo(() => {
    const uniqueCategories = ["all"];
    products.forEach((product) => {
      if (!uniqueCategories.includes(product.category)) {
        uniqueCategories.push(product.category);
      }
    });
    return uniqueCategories;
  }, [products]);

  // Apply filters and sorting whenever category or sort option changes
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Apply sorting (removed name-asc and name-desc)
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        // Keep original order
        break;
    }

    setFilteredProducts(result);
  }, [selectedCategory, sortOption, products]);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  // Format category name for display
  const formatCategoryName = (category) => {
    if (category === "all") return "All Products";
    if (category === "men's clothing") return "Men's Clothing";
    if (category === "women's clothing") return "Women's Clothing";
    if (category === "jewelery") return "Jewelry";
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  // Hooks come AFTER returns - NOT ALLOWED!
  /*if (isAbort) {
    //  implement a retry with full reload clear the abort state.
    return (
      //  <p>{isError}</p>
      //  instead of paragraph send this in a structured notification due to high traffic, request has been aborted
      //  <button onClick={() => window.location.reload()}>Retry</button> 
      //  window.location.reload() immediately unloads the page – any code after it never executes.  
      //  onClick, can be put two function calls inside one 
      //  Disabled the Retry button while loading to prevent multiple clicks 
      <div>
        <button
        onClick={handleRetry}
        disabled={status === 'loading'}
        >Retry</button>
      </div>
    );
  }*/
 
  if (error) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#282C34",
        color: "#fff",
        gap: "1rem",
      }}
      >
      // isError is a STRING, not an object
      <h1 style={{ color: "#ef4444" }}>Error: {error}</h1>
      <button
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
        onClick={() => dispatch(fetchProducts())}
      >
        Try Again
      </button>
    </div>
  );
}

  // After your error check, add this (around line ~168):
  if (products.length === 0 && status !== "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#282C34",
          color: "#fff",
        }}
      >
        <h2>No products found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "1rem",
        backgroundColor: "#282C34",
        minHeight: "100vh",
        boxSizing: "border-box",
        padding: isMobile ? "1rem" : "2rem",
        overflowX: "hidden",
        width: "100%",
        maxWidth: "100vw",
      }}
      className="productsWrapper"
    >
      {/* Page Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: isMobile ? "2rem" : "3rem",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            color: "#fff",
            margin: 0,
            fontSize: isMobile ? "1.8rem" : "3rem",
            padding: isMobile ? "0 0.5rem" : "0",
            // fontFamily: 'MyCustomFont-Regular'
            // fontFamily: 'MyCustomFont-Bold'
            // fontFamily: 'Oswald',
            fontFamily: "Courier New",
            // background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
            // WebkitBackgroundClip: 'text',
            // WebkitTextFillColor: 'transparent',
            // backgroundClip: 'text',
            // textShadow: '0 0 30px rgba(96, 165, 250, 0.3)',
          }}
        >
          OUR PRODUCTS
        </h1>
        <div
          style={{
            height: "4px",
            width: isMobile ? "48px" : "64px",
            borderRadius: "9999px",
            backgroundColor: "#67A0F8",
            margin: "16px auto",
          }}
        ></div>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1.7rem",
            color: "#6b7280",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.5",
            padding: isMobile ? "0 0.5rem" : "0",
            fontFamily: "MyCustomFont-Regular",
          }}
        >
          Discover amazing products with great quality and prices
        </p>
      </div>

      {/* Filter and Sort Controls */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto 2rem auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: "1rem",
          alignItems: isMobile ? "stretch" : "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          padding: isMobile ? "0 0.5rem" : "0",
        }}
      >
        {/* Category Filter */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: isMobile ? "center" : "flex-start",
            width: "100%",
            maxWidth: "100%",
            overflowX: "auto",
            paddingBottom: "0.5rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor:
                  selectedCategory === category ? "#fff" : "#374151",
                border: "none",
                borderRadius: "20px",
                color: selectedCategory === category ? "#1f2937" : "#d1d5db",
                fontSize: isMobile ? "0.8rem" : "0.875rem",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontFamily: "Oswald",
              }}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            width: isMobile ? "100%" : "auto",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
          <span
            style={{
              color: "#9ca3af",
              fontSize: "0.875rem",
              whiteSpace: "nowrap",
              fontFamily: "Courier New",
            }}
          >
            Sort by:
          </span>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#374151",
              border: "1px solid #4b5563",
              borderRadius: "6px",
              color: "#fff",
              fontSize: "0.875rem",
              // fontFamily: 'Courier New',
              fontFamily: "Oswald",
              outline: "none",
              cursor: "pointer",
              width: isMobile ? "100%" : "180px",
              maxWidth: isMobile ? "100%" : "180px",
            }}
          >
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          margin: "0 auto 1.5rem auto",
          color: "#9ca3af",
          fontSize: "0.875rem",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "0.5rem" : "0",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          boxSizing: "border-box",
          padding: isMobile ? "0 0.5rem" : "0",
        }}
      >
        <span
          style={{
            textAlign: isMobile ? "center" : "left",
            width: "100%",
            fontFamily: "MyCustomFont-Regular",
            fontSize: "1.3rem",
          }}
        >
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" &&
            ` in ${formatCategoryName(selectedCategory)}`}
        </span>
        {sortOption !== "default" && (
          <span
            style={{
              textAlign: isMobile ? "center" : "right",
              width: "100%",
            }}
          >
            Sorted by:{" "}
            {sortOption === "price-low"
              ? "Price: Low to High"
              : sortOption === "price-high"
                ? "Price: High to Low"
                : sortOption === "rating"
                  ? "Highest Rated"
                  : "Default"}
          </span>
        )}
      </div>

      {/*ANIMATED LOADER*/}
      {status === "loading" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
            width: "100%",
            backgroundColor: "transparent",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "20px",
              background:
                "linear-gradient(#000 50%,#0000 0)," +
                "linear-gradient(#0000 50%,#000 0)," +
                "linear-gradient(#000 50%,#0000 0)," +
                "linear-gradient(#0000 50%,#000 0)," +
                "linear-gradient(#000 50%,#0000 0)," +
                "linear-gradient(#0000 50%,#000 0) #ddd",
              backgroundSize: "calc(100%/6 + 1px) 200%",
              backgroundRepeat: "no-repeat",
              animation: "l12 2s infinite",
            }}
          />
          <style>
            {`
              @keyframes l12 {
                0%     {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
                83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
                100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
              }
            `}
          </style>
        </div>
      ) : (
        /* Products Grid */
        <section
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(${
              isMobile ? "280px" : isTablet ? "300px" : "320px"
            }, 1fr))`,
            gap: isMobile ? "1rem" : "1.5rem",
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto",
            boxSizing: "border-box",
            padding: isMobile ? "0 0.5rem" : "0",
            fontFamily: "Oswald",
          }}
        >
          {filteredProducts.map((product) => (
            <article
              className="card"
              key={product.id}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${product.title}`}
              style={{
                backgroundColor: "#1f2937",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                border: "1px solid #374151",
                width: "100%",
                maxWidth: "100%",
              }}
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/product/${product.id}`);
                }
              }}
            >
              {/* Product Image */}
              <figure
                style={{
                  width: "100%",
                  backgroundColor: "#111827",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  position: "relative",
                  height: isMobile ? "200px" : "250px",
                  margin: 0,
                  boxSizing: "border-box",
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    width: "auto",
                    height: "auto",
                  }}
                />
                {/* Rating Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "12px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "#fbbf24",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>★</span>
                  <span>{product.rating.rate}</span>
                </div>
              </figure>

              {/* Product Info */}
              <div
                style={{
                  padding: isMobile ? "1rem" : "1.5rem",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                {/* Title */}
                <h2
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    fontWeight: "600",
                    color: "#fff",
                    margin: "0 0 0.75rem 0",
                    lineHeight: "1.4",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "2.8rem",
                    wordBreak: "break-word",
                    // fontFamily: 'MyCustomFont-Regular'
                    // fontFamily: 'Montserrat'
                    fontFamily: "Oswald",
                  }}
                >
                  {product.title}
                </h2>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      margin: 0,
                      // fontFamily: 'MyCustomFont-Re'
                    }}
                    aria-label={`Price: $${product.price}`}
                  >
                    ${product.price.toFixed(2)}
                  </span>

                  {/* Review Count */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#9ca3af",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span>({product.rating.count} reviews)</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#9ca3af",
                    margin: "0 0 1.5rem 0",
                    lineHeight: "1.5",
                    flexGrow: 1,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    wordBreak: "break-word",
                  }}
                >
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
};

export default Products;

/*
In development, React StrictMode:=
Mounts the component → fetch starts
Immediately unmounts (cleanup runs) → controller.abort() → fetch cancelled
Remounts again → new fetch starts
So you see:
"Fetch aborted due to timeout" (from the first, cancelled fetch)
Then products load successfully (from the second fetch)
*/
