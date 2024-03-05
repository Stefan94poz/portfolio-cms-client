"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import SignUpForm from "@/components/forms/singup";

// TODO remove, this demo shouldn't need to reset the theme.
export default function SignUpPage() {
  return (
    <>
      <Grid container maxWidth={730} margin={0} direction={"column"}>
        <SignUpForm />
      </Grid>
    </>
  );
}
