"use client";
import * as React from "react";
import { styled } from "@mui/system";
import classes from "./styles.module.scss";

const MyThemeComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default function ThemeUsage() {
  return (
    <MyThemeComponent className={classes.test}>
      Styled div with theme
    </MyThemeComponent>
  );
}
