import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useProductsQuery, useCategoriesQuery } from "../hooks/useProducts.js";

import PrimaryTogglePagination from "./primary-toggle-pagination.js";

import { Loader } from "./ui/Loader.js";
import Error from "./ui/Error.js";
import EmptyProductsState from "./ui/EmptyProductsState .js";



const Products = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  // Read limit and skip from URL, with fallbacks
  // base‑10 integer, since the URL contains decimal digits.
  // parseInt returns a number
  // const limit = parseInt(searchParams.get('limit') || '48', 10);
  const limit = parseInt(searchParams.get('limit') || '30', 10);
  const Urlskip = parseInt(searchParams.get('skip') || '0', 10);
  // const [limit, setLimit] = useState(48);
  // const [skip, setSkip] = useState(0);

  const categoryFromUrl = searchParams.get('category') || 'all';

  const currPage = Math.floor(Urlskip / limit) + 1;

  const [page, setPage] = useState(currPage);

  const skip = (page - 1) * limit;

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortOption, setSortOption] = useState("default");

  // useProductsQuery does not return a category field, it returns React Query object: { data, isLoading, isError, error, refetch } 
  const { data, isLoading, isError, error, refetch,
   } = useProductsQuery({ limit, skip, 
    category: selectedCategory 
  });

  const { data: categories = [] } = useCategoriesQuery();

  const products = data?.products ?? [];
  // console.log("Products:", products);

  // Extract category names (handles both string[] and { name, slug }[])
  const categoriesList = useMemo(() => {
    // Display name, filter by slug
    if (!categories.length) return [{ name: "All", slug: "all" }];

    const categoryItems = categories.map((cat) => {
      // Return "All" + each category as an object
      return ({
        name: cat.name,
        slug: cat.slug
      })
    }).filter(Boolean);

    return [{ name: "All", slug: "all" }, ...categoryItems];
  }, [categories]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter
    /*if (selectedCategory && selectedCategory !== "all") {
      result = result.filter((product) => product.category === selectedCategory);
    }*/

    // Sort
    switch (sortOption) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }

    return result;
  }, [products, 
    // selectedCategory, 
    sortOption]);

  const itemsPerPage = limit;
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const skip = (page - 1) * limit;
    // update the url whenever page changes
    setSearchParams(
      { 
      limit: String(limit), 
      skip: String(skip),
      category: selectedCategory
    },);
  }, [page, limit,
     selectedCategory,
     setSearchParams]);

  /*const handleMove = (moveCount) => {
    // skip = 0, Next = 48 Prev = -48
    setSearchParams((preParams) => {
      preParams.set('skip', Math.max(skip + moveCount, 0))
      return preParams;
    })
    // setSkip((prevSkip)=>{
    //   return Math.max(prevSkip + moveCount, 0);
    // })
  /*};*/

  // Loading state
  if (isLoading) {
    return (
      <Loader />
    );
  }
  // Error state
  if (isError) {
    return (
      <Error error={error} retry={refetch} />
    );
  }
  if (products.length === 0) {
    return (
      <EmptyProductsState />
    );
  }

  return (
    <div className="">
      <main id="products-display" className="w-full">
        {/* <h1
        style={{ fontFamily: "Courier New" }}
        >{products.length} Products</h1> */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 mb-6">
          {/* Category Select Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-gray-400 text-sm whitespace-nowrap" style={{ fontFamily: "Courier New" }}>
              Category:
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-[#374151] border border-[#4b5563] rounded-md text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              style={{ fontFamily: "Oswald" }}
            >
              {categoriesList.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <span className="text-gray-400 text-sm whitespace-nowrap" style={{ fontFamily: "Courier New" }}>
              Sort by:
            </span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-[#374151] border border-[#4b5563] rounded-md text-white px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              style={{ fontFamily: "Oswald" }}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {filteredProducts.map((product) => {
            const hasDiscount = product.discountPercentage > 0;
            const originalPrice = product.price;
            const finalPrice = hasDiscount
              ? originalPrice * (1 - product.discountPercentage / 100)
              : originalPrice;

            return (
              <article
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:bg-gray-800 p-4 cursor-pointer transition-shadow duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-500"
                tabIndex={0}
                role="button"
                aria-label={`View details for ${product.title}`}
                onClick={() => navigate(`/product/${product.id}?limit=${limit}&skip=${skip}&category=${selectedCategory}`)}
                onKeyDown={(e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    navigate(`/product/${product.id}?limit=${limit}&skip=${skip}&category=${selectedCategory}`);
  }
}}
              >
                <figure className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-50 dark:bg-gray-700 flex items-center justify-center p-2">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full w-full object-contain object-center max-h-[180px] transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  {hasDiscount && (
                    <div className="absolute top-2 left-2 rounded-md bg-red-500 px-2 py-1 text-xs font-bold text-white shadow-sm">
                      {Math.round(product.discountPercentage)}% OFF
                    </div>
                  )}
                  <div className="absolute top-2 right-2 flex items-center gap-1 rounded-md bg-white/90 dark:bg-gray-900/90 px-2 py-1 text-xs font-semibold text-gray-900 dark:text-white shadow-sm backdrop-blur-xs">
                    <span className="text-yellow-400">★</span>
                    <span>{product.rating.toFixed(1)}</span>
                  </div>
                </figure>

                <div className="flex flex-1 flex-col pt-4">
                  {product.brand && (
                    <span
                    style={{ fontFamily: "Courier New" }}
                     className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                      {product.brand}
                    </span>
                  )}
                  <h3
                  
                   className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 h-10 transition-colors">
                    {product.title}
                  </h3>

                  <div className="flex items-baseline justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span
                  style={{ fontFamily: "Courier New" }}

                       className="text-lg font-extrabold text-gray-900 dark:text-white">
                        ${finalPrice.toFixed(2)}
                      </span>
                      {hasDiscount && (
                        <span
                         style={{ fontFamily: "Courier New" }}
                         className="text-xs text-gray-400 dark:text-gray-500 line-through">
                          ${originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <span
                     className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      ({product.reviews?.length || 0} reviews)
                    </span>
                  </div>

                  <div
                  style={{ fontFamily: "Courier New" }}
                   className="mt-1 pt-1 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    {product.stock <= 10 ? (
                      <span
                       className="text-xs font-semibold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">
                        Only {product.stock} left!
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded">
                        {product.availabilityStatus || "In Stock"}
                      </span>
                    )}
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors bg-blue-50 dark:bg-blue-950/40 p-2 rounded-lg cursor-pointer"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        <PrimaryTogglePagination
          currentPage={page}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onPageChange={(newPage) => setPage(newPage)}
        />

      </main>
    </div>
  );
};

export default Products;