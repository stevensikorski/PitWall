import { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { PitWallLogoLarge } from "@/components/ui/logos";
import { Card } from "@/components/ui/card";
import { title, motto, cards } from "@/constants/constants";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <Page>
      <div className="h-[calc(100dvh-6rem)] desktop:h-[calc(100dvh-5rem)] flex flex-col justify-center items-center transition-height">
        <div className="flex justify-center items-center gap-4">
          <PitWallLogoLarge />
          <h1 className="pitwall uppercase">{title}</h1>
        </div>
        <h4 className="text-center mt-1">{motto}</h4>
      </div>
      <hr></hr>
      <h3>Features</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mt-4">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
      <hr></hr>
      <h2>Heading</h2>
      <h3>Subheading</h3>
      <p>Paragraph</p>
    </Page>
  );
}
