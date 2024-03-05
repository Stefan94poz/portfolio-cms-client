"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { globalColors } from "./colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const globalStyles = {
  padding: { input: "10px 12px", button: "10px 20px" },
  borderRadius: "6px",
  border: (size: number, color: string) => `${size}px solid ${color}`,
  colors: { ...globalColors },
  fontSize: { xs: "12px", md: "14px", lg: "16px" },
};
// Create a theme instance.
const theme = createTheme({
  // palette: { error: { main: globalStyles.colors.destructive_500_main } },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightLight: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiOutlinedInput: {
      // styleOverrides: {
      //   root: {
      //     // height: "40px !important",
      //     // borderRadius: "6px !important",
      //     // color: "#131ERO",
      //     // background: "#fff !important",
      //     // fontWeight: 500,
      //     "& fieldset": {
      //       border: "1px solid #9A9FAF",
      //     },
      //     "&:hover fieldset": {
      //       borderColor: "#E5E7EB !important",
      //     },
      //     "& fieldset.MuiOutlinedInput-notchedOutline": {
      //       border: "1px solid #E5E7EB",
      //     },
      //     "&.Mui-focused fieldset": {
      //       border: "1px solid #5FB2FA !important",
      //       boxShadow: "0 0 5px 2px #C6E5FF",
      //     },
      //     // "& .Mui-disabled": {
      //     //   WebkitTextFillColor: `${primary[200]} !important`,
      //     // },
      //     "&.Mui-error fieldset": {
      //       border: "1.5px solid #FCA5A5 !important",
      //       color: "#FCA5A5 !important",
      //     },
      //     "&.Mui-focused, &.Mui-error fieldset": {
      //       border: "1.5px solid #FCA5A5 !important",
      //       boxShadow: "0px 0px 0px 4px #FEE2E2",
      //     },
      //     "&.Mui-error ": {
      //       color: "#FCA5A5 !important",
      //     },
      //   },
      //   colorSecondary: {
      //     color: "#D3D6E0 !important",
      //     "& fieldset": {
      //       border: "1px solid #D3D6E0 !important",
      //     },
      //     "& fieldset.MuiOutlinedInput-notchedOutline": {
      //       border: "1px solid #D3D6E0",
      //     },
      //     "&.Mui-focused fieldset": {
      //       border: "1.5px solid #D3D6E0 !important",
      //     },
      //   },
      //   colorDisabledPhoneNumber: {
      //     "& .Mui-disabled": {
      //       WebkitTextFillColor: `#6B7280 !important`,
      //     },
      //   },
      //   input: {
      //     height: "40px !important",
      //     fontSize: "14px",
      //     "&::placeholder": {
      //       color: "#6B7280",
      //     },
      //     "&:-webkit-autofill": {
      //       WebkitBackgroundClip: "text",
      //     },
      //   },
      // },
    },
  },
});

export default theme;
