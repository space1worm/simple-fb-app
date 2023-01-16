import Image from "next/image";
import {
  ShareIcon,
  HandThumbUpIcon,
  ChatBubbleLeftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { IPost } from "../db/db.types";

import { deletePost } from "../db/posts";
import { useAuth } from "../context/AuthenticationContext";

export default function Post(props: IPost) {
  const { userAuth } = useAuth();

  const { id, name, message, timeStamp, image, postImage, email } = props;
  const handleDeletePost = () => {
    if (userAuth?.email === email) deletePost(id);
  };

  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {image && (
              <Image
                className="rounded-full"
                src={image}
                width={40}
                height={40}
                alt="post"
              />
            )}
            <div className="">
              <p className="font-medium">{name}</p>
              <p className="text-xs text-gray-400">
                {timeStamp && new Date(timeStamp.toDate()).toLocaleString()}
              </p>
            </div>
          </div>
          {userAuth?.email === email && (
            <TrashIcon
              onClick={handleDeletePost}
              className="h-6 flex cursor-pointer  text-red-600 rounded-full "
            />
          )}
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {/* cover image */}
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image
            src={postImage}
            alt="post"
            fill
            sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      )}

      {/* Footer of post */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <HandThumbUpIcon className="h-4" />
          <p className="text-sm sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatBubbleLeftIcon className="h-4" />
          <p className="text-sm sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-sm sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}
