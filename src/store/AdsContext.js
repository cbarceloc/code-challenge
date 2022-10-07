import React, { useState, createContext, useContext } from "react";
import cloneDeep from "lodash.clonedeep";
import initialData from "fakeData/shop_data.json";

// context
const AdsContext = createContext({
  products: initialData.products.map((product, index) => ({
    ...product,
    id: index,
    adds: [],
  })),
  addAd: () => {},
});

// provider
export const AdsProvider = ({ children }) => {
  // --state--
  const [products, setProducts] = useState();

  // --handlers--
  function handleAddAd({ add, productId }) {
    const nextProducts = cloneDeep(products);
    const productIndex = nextProducts.findIndex(
      (product) => product.id === productId
    );
    if (productIndex >= 0) {
      nextProducts[productIndex].adds.push(add);
      setProducts(nextProducts);
    }
  }

  function handleUpdateAd({ add, productId }) {}

  function handleDeleteAd({ productId, addId }) {}

  // --render--
  return (
    <AdsContext.Provider
      value={{
        products,
        addAd: handleAddAd,
        updateAd: handleUpdateAd,
        deleteAd: handleDeleteAd,
      }}
    >
      {children}
    </AdsContext.Provider>
  );
};

export function useAdsContext() {
  return useContext(AdsContext);
}
