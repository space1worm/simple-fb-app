import Image from "next/image";

import {
  BellIcon,
  ChevronDownIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/solid";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { logOut } from "../db/user";
import { useAuth } from "../context/authContext";

export default function Header() {
  const { userAuth } = useAuth();

  const signOutHandler = () => logOut();

  return (
    <header>
      <nav className="sticky top-0 z-50 bg-white justify-between flex items-center p-2 lg:px-5 shadow-md">
        {/* Left */}
        <div className="flex items-center ">
          <h1 className="text-base sm:text-4xl font-bold ">facebook</h1>
        </div>
        {/* Center */}
        <div className="flex justify-center">
          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <MagnifyingGlassIcon className="h-6 text-gray-600" />
            <input
              className="flex w-50 md:w-96 lg:w-96 ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
              placeholder="Search Facebook"
              type="text"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex gap-1 items-center sm:space-x-2 justify-end">
          {/* Profile pic */}
          <Image
            onClick={signOutHandler}
            className="rounded-full cursor-pointer"
            src={userAuth?.photoURL || ""}
            width="25"
            height="25"
            alt="profile img"
          />
          <p className="font-semi:bold pr-3 whitespace-nowrap">
            {userAuth?.displayName?.split(" ")[0]}
          </p>
          <ChatBubbleLeftIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
        </div>
      </nav>
    </header>
  );
}
