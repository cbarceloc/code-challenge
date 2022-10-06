import React, { useState, createContext, useContext } from "react";
import cloneDeep from "lodash.clonedeep";
import initialData from "fakeData/shop_data.json";
import product from "views/root/components/product";

// context
const AddsContext = createContext({
  products: initialData.products.map((product, index) => ({
    ...product,
    key: index,
  })),
});

// provider
export const AddsProvider = ({ children }) => {
  // --state--
  const [products, setProducts] = useState();
  // --handlers--
  function handleAddProduct(product) {
    const nextProducts = cloneDeep(products);
    nextProducts.push(product);
    setProducts(nextProducts);
  }

  function handleUpdateProduct(product, index) {
    const nextProducts = cloneDeep(products);
    setProducts(nextProducts);
  }

  function handleDeleteProduct(index) {
    const nextProducts = cloneDeep(products);
    nextProducts.splice(index, 1);
    setProducts(nextProducts);
  }

  // --render--
  return (
    <AddsContext.Provider
      value={{
        products,
        addItem: handleAddProduct,
        updateItem: handleUpdateProduct,
        deleteItem: handleDeleteProduct,
      }}
    >
      {children}
    </AddsContext.Provider>
  );
};

export function useAddsContext() {
  return useContext(AddsContext);
}
