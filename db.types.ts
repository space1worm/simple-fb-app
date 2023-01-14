import { FieldValue } from "firebase/firestore";

export interface IPosts {
    message: string;
    name: string;
    email: string;
    image: string;
    timeStamp: FieldValue;
}
