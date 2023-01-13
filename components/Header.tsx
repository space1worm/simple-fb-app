import Image from "next/image"
import {
    BellIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    Squares2X2Icon,
    ChatBubbleLeftIcon

} from '@heroicons/react/24/solid';

import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';

import HeaderIcon from "./HeaderIcon";

export default function Header() {
    return <header>
        <nav className="sticky top-0 z-50 bg-white  flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    alt="facebook logo" width={40} height={40}
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <MagnifyingGlassIcon className="h-6 text-gray-600" />
                    <input
                        className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                        placeholder="Search Facebook"
                        type="text"
                    />
                </div>
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}
                <p className="font-semi:bold pr-3 whitespace-nowrap">Space</p>
                <Squares2X2Icon className="icon" />
                <ChatBubbleLeftIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </nav>
    </header>
}