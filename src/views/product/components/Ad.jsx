import React from "react";
import PropTypes from "prop-types";
import Typography from "components/common/Typography";
import styles from "./ad.module.css";
import Avatar from "components/common/Avatar";
import Card from "components/common/Card";
import Button from "@mui/material/Button";

function Ad({ headline, description, imageUrl, shopName }) {
  return (
    <Card className={styles.container}>
      <div className={styles.header}>
        <Avatar
          src={
            "https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png"
          }
        />
        <div className={styles.horizontalSpacing} />
        <div>
          <Typography variant="h6">{shopName}</Typography>
          <Typography variant="body2" color="gray">
            Sponsored
          </Typography>
        </div>
      </div>
      <div className={styles.verticalSpacing} />
      <img src={imageUrl} height={200} className={styles.addImage} />
      <div className={styles.verticalSpacing} />
      <div className={styles.infoButtonWrapper}>
        <div className={styles.infoWrapper}>
          <Typography color="gray" variant="body2">
            {shopName.toUpperCase()}
          </Typography>

          <Typography variant="h6">{headline}</Typography>
          <Typography variant="body2" className={styles.description}>
            {description}
          </Typography>
        </div>
        <div className={styles.horizontalSpacing} />
        <Button variant="contained">Download</Button>
      </div>
    </Card>
  );
}

Ad.propTypes = {
  imageUrl: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.string,
};

export default Ad;
