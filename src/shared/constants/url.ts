export const getAPIUrls = (id?: string) => ({
  product: {
    getAll: "/products",
    add: "/products",
    edit: `/product/${id}`,
    delete: `/product/${id}`,
  },
});
