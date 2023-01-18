import Image from "next/image";
import { IStories } from "../types/app.interfaces";

export default function StoryCard({
  name,
  src,
  profile,
}: IStories): JSX.Element {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20
            lg:h-56 lg:w-32 cursor-pointer overflow-x transition
            duration-200 transform ease-in hover:scale-105 
            hover:animate-pulse
            "
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        width={40}
        height={40}
        alt="User story"
        priority={true}
      />
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        width="200"
        height="200"
        style={{ position: "absolute", width: "100%", height: "100%" }}
        alt="User story"
        priority={true}
      />
      <p className="hidden lg:inline-flex absolute font-medium text-white bottom-2 ml-2">
        {name}
      </p>
    </div>
  );
}
