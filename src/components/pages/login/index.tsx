"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import LoginForm from "../../forms/login";

// TODO remove, this demo shouldn't need to reset the theme.
export default function LoginPage() {
  return (
    <>
      <Grid container maxWidth={730} margin={0} direction={"column"}>
        <LoginForm />
      </Grid>
    </>
  );
}
