import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { DocumentData } from "firebase/firestore";

import { query, orderBy } from "firebase/firestore";

import { firebaseDB } from "../firebase";

import { IPost } from "../db/db.types";

import Post from "./Post";

export default function Posts() {
  const postsRef = collection(firebaseDB, "posts");
  const q = query(postsRef, orderBy("timeStamp", "desc"));

  const [realTimePosts] = useCollection(q);
  return (
    <div>
      {realTimePosts?.docs.map((post: DocumentData) => {
        const postData: IPost = post.data();

        return (
          <Post
            key={post.id}
            id={post.id}
            name={postData.name}
            message={postData.message}
            email={postData.email}
            timeStamp={postData.timeStamp}
            image={postData.image}
            postImage={postData.postImage}
          />
        );
      })}
    </div>
  );
}
