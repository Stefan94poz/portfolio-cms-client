import React from "react";
import { usePathname } from "next/navigation";
import classes from "./styles.module.scss";

export default function GuidingText() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const findTextSnippet = () => {
    switch (pathname) {
      case "/login":
        return (
          <>
            <h1>Welcome to Karriera</h1>
            <p>Please login to your account</p>
          </>
        );
      case "/singn-up":
        return (
          <>
            <h1>Register as a company</h1>
            <p>Please create your company profile</p>
          </>
        );
      default:
        break;
    }
  };
  return <div className={classes.wrapp}>{findTextSnippet()}</div>;
}
