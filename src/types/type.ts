import { UserCredential } from "firebase/auth";

export type User = {
  email: string;
  name: string;
  photoUrl: string;
};

export type AuthResponse =
  | {
      userCredential: UserCredential;
      error: null;
    }
  | {
      userCredential: null;
      error: Error;
    };
