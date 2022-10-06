import React from "react";
import AppBar from "@mui/material/AppBar";
import useShopData from "hooks/useShopData";
import Typography from "components/common/Typography";
import Button from "@mui/material/Button";
import pageWithHeader from "./pageWithHeader.module.css";

export default function PageWithHeader({ children }) {
  const data = useShopData();
  return (
    <div className="container">
      <AppBar component="nav" position="static">
        <div className={pageWithHeader.logoContainer}>
          <img src={data.logo} width={50} height={50}></img>
          <Typography>{data.name}</Typography>
        </div>
      </AppBar>

      <div className="content">{children}</div>
    </div>
  );
}
