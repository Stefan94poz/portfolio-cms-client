"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import classes from "./styles.module.scss";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid container spacing={2} height={"100vh"} margin={0}>
        <Grid
          xs={6}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Grid>
        <Grid xs={6}>
          <div
            style={{
              height: "100%",
              backgroundImage: "url(/login/bg.png)",
            }}
          ></div>
        </Grid>
      </Grid>
    </>
  );
}
