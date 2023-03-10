import { Timestamp, FieldValue } from "firebase/firestore";

export interface IPost {
  id: string;
  name: string;
  message: string;
  email: string;
  timeStamp: Timestamp;
  image: string;
  postImage: string;
}

export interface IPosts {
  message: string;
  name: string;
  email: string;
  image: string;
  timeStamp: FieldValue;
}
