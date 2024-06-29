import { Metadata } from "next";
import { Page } from "@/components/containers/Page";
import { Card } from "@/components/ui/Card";
import { cards } from "@/constants/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help",
};

export default function HomePage() {
  return (
    <Page>
      <h2>PitWall Help</h2>
      <p>This page will help inform you about the many great capabiltiies of PitWall.</p>
      <hr></hr>
      <h3>Features</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mt-4">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} text={item.text} />
        ))}
      </div>
      <hr></hr>
      <h3>Supported Series</h3>
      <p>Which categories of motorsports do we support?</p>
      <br></br>
      <p>FORMULA 1 only for now.</p>
      <hr></hr>
      <h3>Contact and Support</h3>
      <p>Had an issue with PitWall? Let us know!</p>
      <br></br>
      <p>
        PitWall is a project currently in its early development stages. As with any new technology, particularly those involving large language models, there is a potential for errors and inconsistencies. We are actively working to improve the system and appreciate your understanding during this period. If you encounter any issues or have any concerns, please do not hesitate to contact us at{" "}
        <Link href={"mailto:pitwall@stevensikorski.com"} className="text-blue-600">
          pitwall@stevensikorski.com
        </Link>
        .
      </p>
      <hr></hr>
      <h3>Credits and Acknowledgments</h3>
      <p>Here's to everyone that has made this project possible!</p>
      <br></br>
      <p>Steven Sikorski - Project Lead</p>
      <br></br>
      <p>OpenAI, Vercel AI SDK</p>
    </Page>
  );
}
