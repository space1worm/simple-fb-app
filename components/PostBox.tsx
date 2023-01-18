import Image from "next/image";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

import { useAuth } from "../hooks/auth.context.hooks";
import { usePortal } from "../hooks/portal.context.hooks";

import PostBoxIcon from "./PostBoxIcon";

export default function PostBox(): JSX.Element {
  const { userAuth } = useAuth();
  const { setIsOpen } = usePortal();

  return (
    <div className="bg-white sm:p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          alt="User"
          src={userAuth?.photoURL || ""}
          width={40}
          height={40}
        />
        <div className="flex flex-1">
          <button
            className="rounded-full text-left h-12 text-xs sm:text-base bg-gray-100 flex-grow px-5 focus:outline:none"
            type="button"
            onClick={() => setIsOpen(true)}
          >
            Whats on your mind, {userAuth?.displayName?.split(" ")[0]}?
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-evenly p-3 border-t">
        <PostBoxIcon
          text="Like Video"
          Icon={VideoCameraIcon}
          onClick={() => setIsOpen(true)}
          IconClass="text-red-500"
        />
        <PostBoxIcon
          text="Photo/Video"
          Icon={CameraIcon}
          onClick={() => setIsOpen(true)}
          IconClass="text-green-400"
        />
        <PostBoxIcon
          text="Feeling/Activitiy"
          Icon={FaceSmileIcon}
          onClick={() => setIsOpen(true)}
          IconClass="text-yellow-300"
        />
      </div>
    </div>
  );
}
