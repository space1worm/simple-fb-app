import Stories from "../story/Stories.component";
import PostBox from "./PostBox.component";
import Posts from "./Posts.component";

export default function Feed(): JSX.Element {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <PostBox />
        <Posts />
      </div>
    </div>
  );
}
