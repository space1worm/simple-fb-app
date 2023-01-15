import Stories from "./Stories"
import PostBox from "./PostBox"
import Posts from "./Posts"

export default function Feed() {
    return (
        <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories />
                <PostBox />
                <Posts />
            </div>
        </div>
    )
}