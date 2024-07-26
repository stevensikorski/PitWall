import { Metadata } from "next";
import { Page } from "@/components/layout/page";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Info",
};

export default function HomePage() {
  return (
    <Page>
      <h2>PitWall Info</h2>
      <p>PitWall is here to help if you have any questions.</p>
      <hr></hr>
      <h3>PitWall</h3>
      <p>What is PitWall?</p>
      <br></br>
      <p>PitWall is an AI application that delivers real-time updates and insights for FORMULA 1 sessions through an interactive chatbot. Users can engage with PitWall during a Grand Prix to get live updates on weather, team radio, race control messages, and driver positions. PitWall enhances the FORMULA 1 experience by providing unique insights previously thought to be unavailable.</p>
      <hr></hr>
      <h3>Features</h3>
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 mt-4">
        <Card title={"Weather & Track Conditions"}>
          <p className="mt-1">Check the current weather & track conditions for the latest session. Weather conditions are updated every minute. Weather information includes: air temperature, track temperature, conditions, precipitation, humidity, air pressure, wind speed, wind direction.</p>
        </Card>
        <Card title={"Driver Team Radio"}>
          <p>Retrieve the communication between driver and team from the latest session. Each radio clip includes a timestamp local to the track and audio player.</p>
        </Card>
        <Card title={"Race Control Updates"}>
          <p>Retrieve race control updates of the latest session. Each message will include a corresponding timestamp local to the track.</p>
        </Card>
        <Card title={"Driver Positions"}>
          <p>Retrieve the current/finishing driver positions of any session during the weekend. This includes: Practice, Qualifying, Sprint, or Race.</p>
        </Card>
      </div>
      <hr></hr>
      <h3>Supported Series</h3>
      <p>Which categories of motorsports do we support?</p>
      <br></br>
      {/* <p>Currently, PitWall only supports data of the FORMULA 1 world championship.</p> */}
      <p>Currently, PitWall only supports the FORMULA 1 world championship. I do not have a roadmap to support other series for the time being.</p>
      <hr></hr>
      <h3>Contact and Support</h3>
      <p>Had an issue with PitWall? Let me know!</p>
      <br></br>
      <p>
        PitWall is a personal project of mine that has been in its early development since June 2024. This project is my first time integrating large language models, so there is a potential for many errors and inaccurate responses. However, I am actively working to improve upon every iteration of this project. If you encounter any issues, have a concern, or got a question, feel free to contact me at{" "}
        <Link href={"mailto:pitwall@stevensikorski.com"} className="text-blue-600 hover:underline">
          pitwall@stevensikorski.com
        </Link>
        .
      </p>
      <hr></hr>
      <h3>Credits and Acknowledgments</h3>
      <p>Here&apos;s to everything that has made this project possible!</p>
      <br></br>
      <p>Some of the techstack used to create PitWall includes: OpenAI, React.js, Next.js, TypeScript, Node.js, Tailwind CSS</p>
      <br></br>
      <p>
        Natural language processing capabilties powered by the{" "}
        <Link href={"https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/"} target="_blank" className="text-blue-600 hover:underline">
          gpt-4o-mini
        </Link>{" "}
        model.
      </p>
      <p>
        For those interested in creating a project similar to this one, feel free to check out the{" "}
        <Link href={"https://sdk.vercel.ai/docs/introduction"} target="_blank" className="text-blue-600 hover:underline">
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
