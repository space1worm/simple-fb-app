import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { firebaseDB, firebaseStorage } from "../firebase";
import { IPosts } from "../types/db/db.interface";
import { TImgFile } from "../types/db/db.types";

console.log("33");

export const createPostImage = async (docId: string, file: TImgFile) => {
  const storageRef = ref(firebaseStorage, `posts/${docId}`);
  const uploadTask = uploadBytesResumable(storageRef, file, {
    contentType: "image/jpeg",
  });

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (p == 99) console.log("Upload is " + p + "% done");
    },
    (error) => console.log(error.code),
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
        const currentPost = doc(firebaseDB, "posts", docId);
        await setDoc(currentPost, { postImage: url }, { merge: true });
      });
    }
  );
};

//code inside component
export const createPost = async (payload: IPosts, file: TImgFile | null) => {
  const postsCollectionRef = collection(firebaseDB, "posts");
  const responce = await addDoc(postsCollectionRef, payload);

  if (file) await createPostImage(responce.id, file);
  return responce;
};

export const deletePost = async (id: string) => {
  const docRef = doc(firebaseDB, "posts", id);
  const res = await deleteDoc(docRef);
  return res;
};
