export const fetchDataProducts = async (limit = 30, skip = 0, category = "all") => {

  let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`

  if (category && category !== "all") {
    url = `https://dummyjson.com/products/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;
  }

  const res = await fetch(
    url,
  ); // https://dummyjson.com/products

  console.trace("fetchDataProducts called with", { limit, skip });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch products, HTTP error! status: ${res.status}`,
    ); // throw immediately stops execution and jumps to the catch block. ii. Creates an Error object with stack trace iii. Error available as error.message
  }

  const data = await res.json();

  console.log(data);

  // DummyJSON's /products endpoint returns an object with a products array
  return data;
};

// The product detail endpoint doesn’t need pagination parameters – it’s a single item.
export const fetchDataProduct = async (productId) => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);

  if (!res.ok) {
    throw new Error(
      `Failed to fetch product, HTTP error! status: ${res.status}`,
    ); // throw immediately stops execution and jumps to the catch block.
  }

  const data = await res.json();

  return data;
};



// for Categories 
export const fetchDataCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories"); // https://dummyjson.com/products/categories

  if (!res.ok) {
    throw new Error(
      `Failed to fetch categories, HTTP error! status: ${res.status}`,
    ); // throw immediately stops execution and jumps to the catch block. ii. Creates an Error object with stack trace iii. Error available as error.message
  }

  const data = await res.json();

  console.log(data);

  return data;
};

export const fetchDataSearch = async (query, limit = 30, skip = 0) => {
  const res = await fetch(
    `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${encodeURIComponent(query)}`,
  ); // https://dummyjson.com/products

  if (!res.ok) {
    throw new Error(`Search failed: ${res.status}`);
  }

  return res.json(); 

};
