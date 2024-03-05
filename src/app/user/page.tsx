"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const User = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  console.log("session?.token", session);
  const data = getData();
  return (
    <>
      <h1 onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>
        {t("title")}
      </h1>
    </>
  );
};

export default User;
