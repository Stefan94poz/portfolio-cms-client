"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";

const User = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  console.log("session?.token", session?.token);

  return (
    <>
      <h1 onClick={() => signOut({ redirect: true, callbackUrl: "/login" })}>
        {t("title")}
      </h1>
    </>
  );
};

export default User;
