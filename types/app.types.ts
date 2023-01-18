import { AnySchema } from "yup";

export type YupInterface<T> = Record<keyof T, AnySchema>;
export interface SignInFormInputs {
  email: string;
  password: string;
}

export interface SignUpFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export interface IStories {
  name: string;
  src: string;
  profile: string;
}

export interface IContacts {
  src: string;
  name: string;
}
