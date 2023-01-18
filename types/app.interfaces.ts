import { User } from "firebase/auth";

export interface IUserContext {
  userAuth: null | User;
}

export interface IPortalContext {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export interface ISignInFormInputs {
  email: string;
  password: string;
}

export interface ISignUpFormInputs {
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
