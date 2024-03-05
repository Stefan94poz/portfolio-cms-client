"use client";
import * as React from "react";
import { styled } from "@mui/system";
import { Button as MuiButton } from "@mui/material";
import { globalStyles } from "@/theme/theme";
import { IButton } from "@/types/ui";

const ButtonComponent = styled(MuiButton)((props): any => ({
  color: props.theme.palette.primary.contrastText,
  backgroundColor: globalStyles.colors.secondary.secondary_500_main,
  padding: globalStyles.padding.button,
  borderRadius: globalStyles.borderRadius,
  margin: "24px 0px",
  width: (props: IButton) => props.fullWidth && "100%",
}));

export default function Button(props: any) {
  return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
}
