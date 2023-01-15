import { Timestamp, FieldValue } from "firebase/firestore";

export interface IPost {
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

export type ImgFile = Blob | Uint8Array | ArrayBuffer;
