import React from "react";
import AppBar from "@mui/material/AppBar";
import useShopData from "hooks/useShopData";
import Typography from "components/common/Typography";
import styles from "./pageWithHeader.module.css";

export default function PageWithHeader({ children }) {
  const data = useShopData();
  return (
    <div>
      <AppBar component="nav" position="static">
        <div className={styles.logoContainer}>
          <img src={data.logo} width={50} height={50}></img>
          <Typography>{data.name}</Typography>
        </div>
      </AppBar>

      <div className={styles.content}>{children}</div>
    </div>
  );
}
