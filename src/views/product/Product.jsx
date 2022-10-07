import React from "react";
import PropTypes from "prop-types";
import { useAdsContext } from "store/AdsContext";
import useShopData from "hooks/useShopData";

import { useNavigate, useParams } from "react-router-dom";
import Ad from "./components/Ad";
import Button from "@mui/material/Button";
import PageWithHeader from "components/common/PageWithHeader";
import styles from "./product.module.css";

function Product(props) {
  //hooks
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const shopData = useShopData();

  // test data
  const testAd = {
    imageUrl:
      "https://www.4webs.es/blog/wp-content/uploads/2019/02/urls-que-es.jpg",
    headline: "Try Ad MockUp Now! Its Free",
    description:
      "Ad Mockups lets you create fast and easy mockups all in one place. Test it out!...",
  };
  const testProduct = {
    ads: [testAd],
  };

  // context
  const { products, addAd } = useAdsContext();
  const handleClickAd = () => {
    addAd({ ad: testAd, productId });
  };
  return (
    <PageWithHeader>
      <div className={styles.container}>
        <Button variant="contained" onClick={handleClickAd}>
          Add
        </Button>

        {[testProduct, ...products].map((product) =>
          product?.ads?.map((ad) => <Ad shopName={shopData.name} {...ad} />)
        )}
      </div>
    </PageWithHeader>
  );
}

Product.propTypes = {};

export default Product;
