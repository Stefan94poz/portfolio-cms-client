"use client";
import * as React from "react";
import type { Metadata } from "next";
import SignUpPage from "@/components/pages/singUp";

export default function SignUp() {
  const metadata: Metadata = {
    title: "Login",
    description: "This is where you login",
  };

  return <SignUpPage />;
}
