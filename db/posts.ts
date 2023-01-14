import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { firebaseDB, firebaseStorage } from "../firebase";

import { IPosts } from "../db.types";

const metadata = {
    contentType: "image/jpeg",
};

export const createPostImage = async (docId: string, file: ImgFile) => {
    const storageRef = ref(firebaseStorage, `posts/${docId}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

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
export const createPost = async (payload: IPosts, file: ImgFile) => {
    const postsCollectionRef = collection(firebaseDB, "posts");
    const responce = await addDoc(postsCollectionRef, payload);
    await createPostImage(responce.id, file);
    return responce;
};

type ImgFile = Blob | Uint8Array | ArrayBuffer;
