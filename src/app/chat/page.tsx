import { Metadata } from "next";
import { Chat } from "@/components/containers/Chat";
import { Message } from "@/components/chat/Message";
import { Conversation } from "@/components/chat/Conversation";

export const metadata: Metadata = {
  title: "Chat",
};

export default function ChatPage() {
  return (
    <Chat>
      <Conversation>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum id venenatis a condimentum vitae. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Congue mauris rhoncus aenean vel. Sollicitudin nibh sit amet commodo nulla facilisi. Feugiat in ante metus dictum at tempor. Integer vitae justo eget magna fermentum iaculis eu non diam. Massa massa ultricies mi quis hendrerit dolor magna. Augue lacus viverra vitae congue eu consequat ac. Quisque egestas diam in arcu cursus euismod quis viverra nibh. Turpis egestas sed tempus urna et pharetra. Quis hendrerit dolor magna eget est lorem. Nulla pharetra diam sit amet nisl suscipit. Pretium vulputate sapien nec sagittis aliquam malesuada. Leo integer malesuada nunc vel risus commodo viverra maecenas. Parturient montes nascetur ridiculus mus mauris. Pellentesque elit ullamcorper dignissim cras tincidunt. Sapien eget mi proin sed libero enim sed faucibus turpis. A lacus
          vestibulum sed arcu. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Urna cursus eget nunc scelerisque viverra mauris in. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Morbi non arcu risus quis varius quam quisque id diam. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Elit ut aliquam purus sit amet. Nisi porta lorem mollis aliquam ut. Mauris augue neque gravida in. Ut placerat orci nulla pellentesque dignissim. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Risus nullam eget felis eget. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Vestibulum lorem sed risus ultricies tristique nulla. Diam maecenas sed enim ut sem viverra aliquet. Quisque non tellus orci ac auctor augue mauris augue. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus. Scelerisque purus semper eget duis. Sodales neque sodales ut etiam sit. Massa massa ultricies mi quis hendrerit dolor magna eget est. Arcu risus quis
          varius quam quisque id diam. Mi quis hendrerit dolor magna eget est lorem. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Nunc sed id semper risus. Quis varius quam quisque id. Interdum velit laoreet id donec ultrices tincidunt arcu. Ut eu sem integer vitae justo. Quam quisque id diam vel quam elementum. Id semper risus in hendrerit gravida rutrum quisque. Cursus in hac habitasse platea. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Tempor commodo ullamcorper a lacus. Neque sodales ut etiam sit amet. Elit ut aliquam purus sit amet luctus venenatis. Eu non diam phasellus vestibulum lorem sed. In vitae turpis massa sed elementum tempus egestas sed sed. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Egestas dui id ornare arcu odio ut sem. Nisi lacus sed viverra tellus in hac habitasse. Consectetur a erat nam at. Leo integer malesuada nunc vel. Faucibus interdum posuere lorem ipsum dolor sit amet.
        </p>
      </Conversation>
      <Message />
    </Chat>
  );
}
