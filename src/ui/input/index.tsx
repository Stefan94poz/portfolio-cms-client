"use client";
import * as React from "react";
import { styled } from "@mui/system";
import classes from "./styles.module.scss";
import { TextField } from "@mui/material";

const InputComponent = styled(TextField)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default function Input() {
  return <InputComponent />;
}
