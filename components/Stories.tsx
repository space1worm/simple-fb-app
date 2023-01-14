import StoryCard from "./StoryCard";

export interface IStories {
    name: string;
    src: string;
    profile: string;
}

const stories: IStories[] = [
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
    {
        name: "Jacob",
        src: 'https://links.papareact.com/zof',
        profile: "https://links.papareact.com/l4v"
    },
]

export default function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
            {
                stories.map((story) => {
                    return <StoryCard
                        key={`${story.src} + ${Math.random()}`}
                        name={story.name}
                        src={story.src}
                        profile={story.profile}
                    />
                })
            }
        </div>
    )
}