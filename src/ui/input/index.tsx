"use client";
import * as React from "react";
import { styled } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import { globalStyles } from "@/theme/theme";

const InputComponent = styled(OutlinedInput)(({ theme }) => ({
  input: {
    border: "unset",
    padding: globalStyles.padding.input,
    borderColor: globalStyles.colors.neutral_200,
    borderRadius: globalStyles.borderRadius,
    color: globalStyles.colors.neutral_500,
    "&::placeholder": {
      color: globalStyles.colors.neutral_300,
      fontSize: globalStyles.fontSize.md,
    },
    "&.Mui-error fieldset": {
      border: "1.5px solid #FCA5A5",
      color: "#FCA5A5 ",
    },
  },
  "&.Mui-focused.Mui-error fieldset": {
    border: "1.5px solid #FCA5A5",
    boxShadow: "0px 0px 0px 4px #FEE2E2",
  },
}));

export default function Input(props: any) {
  return (
    <>
      <h4>{props?.inputlabel}</h4>
      <InputComponent {...props} />
      <p style={{ color: globalStyles.colors.destructive_500_main }}>
        {props?.helpertext}
      </p>
    </>
  );
}
