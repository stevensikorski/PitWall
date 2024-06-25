import { Metadata } from "next";
import { Page } from "@/components/containers/Page";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <Page>
      <h1>Title Heading</h1>
      <h2>Heading</h2>
      <h3>Subheading</h3>
      <p>Paragraph</p>
    </Page>
  );
}
