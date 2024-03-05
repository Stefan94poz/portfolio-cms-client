"use client";

import { Grid } from "@mui/material";
import Image from "next/image";
import GuidingText from "@/components/guidingText";
import classes from "./styles.module.scss";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid container height={"100vh"} margin={0}>
        <Grid
          item
          xs={6}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          padding="24px"
        >
          <div className={classes.logo}>
            <Image
              src="/logo.svg"
              width={182}
              height={68}
              objectFit="content"
              alt="Picture of the Karriera logo"
            />
          </div>
          <GuidingText />
          {children}
        </Grid>
        <Grid item xs={6}>
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
