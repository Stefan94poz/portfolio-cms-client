"use client";
import * as React from "react";
import type { Metadata } from "next";
import LoginPage from "@/components/pages/login";
// TODO remove, this demo shouldn't need to reset the theme.

export default function Login() {
  const metadata: Metadata = {
    title: "Login",
    description: "This is where you login",
  };

  return <LoginPage />;
}
