"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data ,status } = useSession();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="text-[#fff] bg-red-600 p-2 rounded-md text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
          onClick={() => {
            signOut();
          }}
        >
          {data?.user?.name}{" "}Logout here
        </button>
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Link
          href="/login"
          className="text-[#fff] bg-violet-600 p-2 rounded-md text-sm text-999 mt-7 transition duration-150 ease hover:text-white"
        >
          Login here
        </Link>
      )
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-xl">NextAuth APP</h1>
      {showSession()}
    </main>
  );
}