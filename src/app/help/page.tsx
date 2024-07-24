import { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { Card } from "@/components/ui/card";
import { cards } from "@/constants/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help",
};

export default function HomePage() {
  return (
    <Page>
      <h2>PitWall Help</h2>
      <p>PitWall is here to help if you have any questions.</p>
      <hr></hr>
      <h3>Features</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mt-4">
        {cards.map((item, index) => (
          <Card key={index} title={item.title} display={item.display} />
        ))}
      </div>
      <hr></hr>
      <h3>Supported Series</h3>
      <p>Which categories of motorsports do we support?</p>
      <br></br>
      {/* <p>Currently, PitWall only supports data of the FORMULA 1 world championship.</p> */}
      <p>Currently, PitWall only supports the FORMULA 1 world championship. I do not have any plans/roadmap to support other series for the time being.</p>
      <hr></hr>
      <h3>Contact and Support</h3>
      <p>Had an issue with PitWall? Let me know!</p>
      <br></br>
      <p>
        PitWall is a personal project of mine that has been in its early development since June 21, 2024. This project is my first time integrating large language models, so there is a potential for many errors and inaccurate responses. However, I am actively working to improve upon every iteration of this project. If you encounter any issues, have a concern, or got a question, feel free to contact me at{" "}
        <Link href={"mailto:pitwall@stevensikorski.com"} className="text-blue-600 hover:underline">
          pitwall@stevensikorski.com
        </Link>
        .
      </p>
      <hr></hr>
      <h3>Credits and Acknowledgments</h3>
      <p>Here&apos;s to everything that has made this project possible!</p>
      <br></br>
      <p>Here is the techstack of this project:</p>
      <p>OpenAI, React.js, Next.js, TypeScript, Node.js, Tailwind CSS</p>
      <br></br>
      <p>Natural language processing integrated with gpt-4o-mini.</p>
      <p>
        For those interested in creating a project similar to this one, feel free to check out the{" "}
        <Link href={"https://sdk.vercel.ai/docs/introduction"} className="text-blue-600 hover:underline">
          Vercel AI SDK
        </Link>
        .
      </p>
      <p>
        FORMULA 1 data powered by{" "}
        <Link href="https://openf1.org/" target="_blank" className="text-blue-600 hover:underline">
          OpenF1
        </Link>
        .
      </p>
    </Page>
  );
}
