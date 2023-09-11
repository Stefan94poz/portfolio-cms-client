"use client";

import Input from "@/ui/input";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <>loading</>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Input />
    </div>
  );
}
