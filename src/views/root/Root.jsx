import Product from "./components/productListItem";
import { useAdsContext } from "store/AdsContext";
import styles from "./root.module.css";
import PageWithHeader from "components/common/PageWithHeader";
import { useNavigate } from "react-router-dom";
import { getProductPath } from "globals/routerPaths";

export default function Root() {
  //hooks
  const navigate = useNavigate();

  // context
  const { products } = useAdsContext();

  // handlers
  function handleClickProduct(id) {
    navigate(getProductPath(id));
  }
  return (
    <PageWithHeader>
      <div className={styles.container}>
        {products.map((product) => (
          <Product
            key={product.id}
            onClick={() => handleClickProduct(product.id)}
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
