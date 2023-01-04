export const getAPIUrls = (id?: string) => ({
  product: {
    getAll: "/products",
    create: "/products",
    edit: `/product/${id}`,
    delete: `/product/${id}`,
  },
});
