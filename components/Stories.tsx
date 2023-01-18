import StoryCard from "./StoryCard";

import { IStories } from "../types/app/app.interfaces";

const stories: IStories[] = [
  {
    src: "https://links.papareact.com/f0p",
    profile: "https://links.papareact.com/f0p",
    name: "Jeff Bezos",
  },
  {
    src: "https://links.papareact.com/kxk",
    profile: "https://links.papareact.com/f0p",
    name: "Elon Musk",
  },
  {
    src: "https://links.papareact.com/zvy",
    profile: "https://links.papareact.com/f0p",
    name: "Bill Gates",
  },
  {
    src: "https://links.papareact.com/snf",
    profile: "https://links.papareact.com/f0p",
    name: "Mark Zuckerberg",
  },
  {
    src: "https://links.papareact.com/d0c",
    profile: "https://links.papareact.com/f0p",
    name: "Harry Potter",
  },
];

export default function Stories(): JSX.Element {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => {
        return (
          <StoryCard
            key={`${story.src} + ${Math.random()}`}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        );
      })}
    </div>
  );
}
