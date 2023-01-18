import { ChangeEvent, useRef, useState, FormEvent } from "react";
import { serverTimestamp } from "firebase/firestore";
import autosize from "autosize";
import Image from "next/image";
import { XMarkIcon, PhotoIcon } from "@heroicons/react/24/solid";

import { useAuth } from "../context/AuthenticationContext";
import { usePortal } from "../context/PortalContext";

import Portal from "./Portal";

import { createPost } from "../lib/posts";
import { IPosts } from "../types/db.types";

interface Istate {
  blob: Blob | null;
  src: string | null;
}

const initialState: Istate = {
  blob: null,
  src: null,
};

export default function PostModal(): JSX.Element {
  // context
  const { userAuth } = useAuth();
  const { setIsOpen } = usePortal();

  // state
  const [text, setText] = useState("");
  const [file, setFile] = useState<null | string>(null);
  const [imageToPost, setImageToPost] = useState<Istate>(initialState);
  const [disabled, setDisalbed] = useState<boolean>(false);

  // ref
  const textRef = useRef<null | HTMLTextAreaElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  const formRef = useRef<null | HTMLFormElement>(null);

  const resetForm = () => {
    setImageToPost(initialState);
    setIsOpen(false);
    setFile(null);
    setText("");
    setIsOpen(false);
    setDisalbed(false);
    formRef.current?.reset();
  };

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (textRef.current) autosize(textRef.current);
  };

  const onPhotoUpload = () => {
    if (!inputRef.current) return;
    if (inputRef.current.files) {
      const reader = new FileReader();
      const imgBlob = inputRef.current.files[0];

      setFile(URL.createObjectURL(imgBlob));

      reader.readAsDataURL(imgBlob);
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
    }
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisalbed(true);

    if (text.length < 1 && !imageToPost.blob)
      return alert("Nope, fill at least something <3");

    const payload: IPosts = {
      message: text,
      name: userAuth?.displayName || "",
      email: userAuth?.email || "",
      image: userAuth?.photoURL || "",
      timeStamp: serverTimestamp(),
    };

    await createPost(payload, imageToPost.blob);
    resetForm();
  };

  return (
    <Portal>
      <form
        onSubmit={onSubmitHandler}
        ref={formRef}
        className="flex flex-col gap-y-4 bg-[#242526] lg:w-1/2 py-4 rounded w-3/4 text-white"
      >
        <div className="w-full shadow-lg  pb-4 pr-4">
          <div className="flex  items-center justify-center">
            <h1 className="font-semibold text-xl text-center flex-1">
              Create Post
            </h1>
            <XMarkIcon
              onClick={resetForm}
              className="h-6 cursor-pointer rounded-full bg-[#3a3b3c]"
            />
          </div>
        </div>

        <div className="px-4 flex flex-col space-y-4">
          <div className="flex items-center gap-4">
            <Image
              className="rounded-full"
              alt="User"
              src={userAuth?.photoURL || ""}
              width={40}
              height={40}
            />
            <h2>{userAuth?.displayName}</h2>
          </div>
          <textarea
            className="flex px-2 resize-none overflow-hidden break-words flex-col rounded-sm bg-transparent sm:text-base active:outline-none focus:outline-none"
            ref={textRef}
            placeholder={`Whats on your mind, ${
              userAuth?.displayName?.split(" ")[0]
            }?`}
            onChange={onTextChange}
            value={text}
          />
        </div>

        <div className="px-4" onClick={() => inputRef.current?.click()}>
          <div className="cursor-pointer rounded h-80 flex gap-y-4 flex-col justify-center items-center bg-[#313436] rounded">
            {file ? (
              <Image
                src={file}
                width={50}
                height={50}
                alt={"preview"}
                className="h-full w-full object-fill"
              />
            ) : (
              <>
                <h1 className="font-bold text-lg">Add Photos or video</h1>
                <PhotoIcon className="h-8" />
              </>
            )}
            <input hidden type="file" ref={inputRef} onChange={onPhotoUpload} />
          </div>
        </div>

        <button
          type="submit"
          disabled={disabled}
          className="bg-blue-700 p-2 m-4 rounded font-sm font-bold"
        >
          Post
        </button>
      </form>
    </Portal>
  );
}
