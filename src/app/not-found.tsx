"use client";
import { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/components/containers/Page";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <Page>
      <div className="h-[50vh] w-full flex flex-col justify-center items-center">
        <h2>404 Page Not Found</h2>
        <p className="mt-2">
          Why not head back{" "}
          <Link href={"/"} className="text-blue-600 underline">
            home
          </Link>
          ?
        </p>
      </div>
    </Page>
  );
}
