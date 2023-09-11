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
  border: (size: number, color: string) => `{size} solid {color}`,
  colors: { ...globalColors },
};
// Create a theme instance.
const theme = createTheme({
  palette: {},

  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
