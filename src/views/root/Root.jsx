import Product from "./components/product";
import { useAddsContext } from "store/AddsContext";
import styles from "./root.module.css";
import PageWithHeader from "components/common/PageWithHeader";

export default function Root() {
  // context
  const { products } = useAddsContext();

  function handleClickProduct() {}
  return (
    <PageWithHeader>
      <div className={styles.container}>
        {products.map((product, index) => (
          <Product
            key={product.key}
            onClick={handleClickProduct}
            name={product.productName}
            description={product.productDescription}
            image={product.productImage}
            price={product.price}
          />
        ))}
      </div>
    </PageWithHeader>
  );
}
