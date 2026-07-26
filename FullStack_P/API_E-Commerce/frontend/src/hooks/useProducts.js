import { useQuery, useQueryClient, keepPreviousData } from "@tanstack/react-query";

import { fetchDataProducts, fetchDataProduct,
  fetchDataCategories,
  fetchDataSearch
 } from "./api/productApi.js";

// hook functions must start with use (to comply with React's Rules of Hooks)
export const useProductsQuery = ({ limit = 30, skip = 0, category = "all" } = {}) => {
  return useQuery({
    queryKey: ["products", category, limit, skip],
    // when a function requires an argument we need to wrap it in a function
    queryFn: () => fetchDataProducts(limit, skip, category),
    select: (data) => ({
      products: data.products,
      total: data.total,
    }),
    placeholderData: keepPreviousData
  });
};

export const useProductQuery = (productId, limit, skip, category = "all") => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchDataProduct(productId),
    enabled: !!productId,
    initialData: () => {
      const data = queryClient.getQueryData(["products", category, limit, skip] );
      console.log("Initial data for productId", productId, "from list query:", data);
      console.log(data?.products?.find((product) => product.id === Number(productId)));
      return data?.products?.find((product) => product.id === Number(productId));
    },
    initialDataUpdatedAt: () => {
      return queryClient.getQueryState(["products", limit, skip])?.dataUpdatedAt;
    },
  });
};

export const useCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchDataCategories,
  });
};

export const useSearchQuery = (query, limit = 30, skip = 0) => {
  return useQuery({
    queryKey: ["search", query, limit, skip],
    queryFn: () => fetchDataSearch(query, limit, skip),
    select: (data) => ({
      products: data.products,
      total: data.total,
    }),
    // This prevents the query from running if the search term is empty, and trim the spaces
    enabled: !!query && query.trim().length > 0,
    placeholderData: keepPreviousData, // for smooth ui
  });
};