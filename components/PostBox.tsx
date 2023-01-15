import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { serverTimestamp } from "firebase/firestore";

import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

import { createPost } from "../db/posts";

import { IPosts } from "../db/db.types";
import { useAuth } from "../context/authContext";

interface Img {
  blob: Blob | null;
  src: string | null;
}

const ImgInitialState: Img = {
  blob: null,
  src: null,
};

export default function PostBox() {
  const { userAuth } = useAuth();
  const [imageToPost, setImageToPost] = useState<Img>(ImgInitialState);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const filePickerRef = useRef<null | HTMLInputElement>(null);
  const formRef = useRef<null | HTMLFormElement>(null);

  const removeImage = () => setImageToPost(ImgInitialState);
  const resetForm = () => {
    removeImage();
    formRef.current?.reset();
  };

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const reader = new FileReader();

    const imgBlob = e.target.files[0];
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      if (readerEvent.target && readerEvent.target.result) {
        setImageToPost({
          blob: imgBlob,
          src: readerEvent.target.result.toString(),
        });
      } else {
        alert(`Something wen't wrong please try again.`);
      }
    };
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current || inputRef.current?.value.length < 1) return;

    const payload: IPosts = {
      message: inputRef.current.value,
      name: userAuth?.displayName || "",
      email: userAuth?.email || "",
      image: userAuth?.photoURL || "",
      timeStamp: serverTimestamp(),
    };

    await createPost(payload, imageToPost.blob);
    resetForm();
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          alt="User"
          src={userAuth?.photoURL || ""}
          width={40}
          height={40}
        />
        <form ref={formRef} className="flex flex-1" onSubmit={onSubmitHandler}>
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline:none"
            type="text"
            ref={inputRef}
            placeholder={`Whats on your mind, ${userAuth?.displayName}?`}
          />
          <button
            className="bg-gray-100 rounded-full px-4 py-2 text-center"
            type="submit"
          >
            submit
          </button>
        </form>
        {imageToPost.src && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-120 transform hover:scale105 cursor-pointer"
          >
            <img
              className="h-10 object-container"
              src={imageToPost.src}
              alt="photo"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current?.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <FaceSmileIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
