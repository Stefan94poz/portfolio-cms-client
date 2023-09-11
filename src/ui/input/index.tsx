"use client";
import * as React from "react";
import { styled } from "@mui/system";
import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";
import { globalStyles } from "@/theme/theme";

const InputComponent = styled(TextField)(({ theme }) => ({
  color: theme.palette.gray,
  backgroundColor: globalStyles.colors.primary.type_1,
  padding: globalStyles.padding.input,
  borderRadius: globalStyles.borderRadius,
  border: globalStyles.border(1, globalStyles.colors.secondary.gray),
})) as typeof TextField;

export default function Input(props: TextFieldProps) {
  return <InputComponent {...props} />;
}
