import { Metadata } from "next";
import { Chat } from "@/components/containers/Chat";
import { MessageBox } from "@/components/chat/MessageBox";
import { Conversation } from "@/components/chat/Conversation";
import { UserMessage, PitWallMessage, LoadingMessage } from "@/components/chat/Message";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  const text = `Here are some highly recommended F1 races to watch, known for their excitement, drama, and historical significance:

1. **Brazilian Grand Prix (2008)** - The title-deciding race between Lewis Hamilton and Felipe Massa, with a dramatic finish that saw Hamilton secure his first World Championship on the final corner of the last lap.

2. **European Grand Prix (1997, Jerez)** - A thrilling title decider between Michael Schumacher and Jacques Villeneuve, known for its controversy and dramatic on-track clash.

3. **Japanese Grand Prix (1989, Suzuka)** - The infamous collision between Ayrton Senna and Alain Prost that decided the championship in a dramatic fashion.

4. **Canadian Grand Prix (2011)** - One of the longest races in F1 history due to rain delays, with Jenson Button winning after making six pit stops and coming from last place twice.

5. **Monaco Grand Prix (1992)** - A classic race with an intense battle between Ayrton Senna and Nigel Mansell, showcasing incredible driving skill and close racing on the tight streets of Monaco.

6. **Italian Grand Prix (2020, Monza)** - A surprising and thrilling race with Pierre Gasly securing his first career win after a dramatic sequence of events.

7. **Belgian Grand Prix (1998, Spa-Francorchamps)** - Known for the massive first-lap pile-up and the subsequent dramatic race, including a collision between Michael Schumacher and David Coulthard.

8. **Australian Grand Prix (2002, Melbourne)** - Featuring an exciting start with a massive crash and a thrilling battle between teammates Michael Schumacher and Rubens Barrichello.

9. **British Grand Prix (2021, Silverstone)** - Marked by the intense rivalry between Lewis Hamilton and Max Verstappen, including a dramatic collision and a comeback win for Hamilton.

10. **Hungarian Grand Prix (2021)** - A race with chaos at the start, incredible strategy calls, and a historic first win for Esteban Ocon, with Hamilton's remarkable recovery drive adding to the excitement.

These races are celebrated for their memorable moments, intense rivalries, and exceptional displays of driving skill.`;

  return (
    <Chat>
      <Conversation>
        <UserMessage text="Who won the Grand Prix?" />
        <PitWallMessage text="Hey there!" />
        <UserMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <PitWallMessage text="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" />
        <UserMessage text="List me some F1 races you recommend me to watch." />
        <PitWallMessage text={text} />
        <LoadingMessage />
      </Conversation>
      <MessageBox />
    </Chat>
  );
}
