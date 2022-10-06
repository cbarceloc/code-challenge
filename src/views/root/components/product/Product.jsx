import React from "react";
import PropTypes from "prop-types";
import Card from "components/common/Card";
import CardContent from "components/common/CardContent";
import CardHeader from "components/common/CardHeader";
import Avatar from "components/common/Avatar";
import Typography from "components/common/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./product.module.css";

function Product({ name, price, description, image, onClick }) {
  return (
    <div className={styles.container}>
      <Card>
        <CardActionArea onClick={onClick}>
          <CardHeader
            title={name}
            subheader={description}
            avatar={<Avatar src={image} />}
            action={<Typography>{price}€</Typography>}
          ></CardHeader>
        </CardActionArea>
      </Card>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};

export default Product;
