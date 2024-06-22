import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return (
    <main>
      <p>404 Not Found</p>
    </main>
  );
}
