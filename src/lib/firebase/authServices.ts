import CONF from "@/conf/conf";
import { AuthResponse } from "@/types/type";
import { initializeApp } from "firebase/app";
import {
  Auth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export class AuthService {
  auth: Auth;

  constructor() {
    const firebaseConfig = {
      apiKey: CONF.firebaseConfig.apiKey,
      authDomain: CONF.firebaseConfig.authDomain,
      projectId: CONF.firebaseConfig.projectId,
      storageBucket: CONF.firebaseConfig.storageBucket,
      messagingSenderId: CONF.firebaseConfig.messagingSenderId,
      appId: CONF.firebaseConfig.appId,
    };

    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
  }

  async signupWithEmailPassword({
    email,
    password,
  }: SignupWithEmailPassword): Promise<AuthResponse> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return { userCredential, error: null };
    } catch (error: any) {
      //* Modify Error message
      error.message =
        error?.code === "auth/email-already-in-use"
          ? "Email already in use"
          : error.message;

      return {
        userCredential: null,
        error,
      };
    }
  }

  //
  async signupWithGoogle(): Promise<AuthResponse> {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(this.auth, provider);

      return { userCredential, error: null };
    } catch (error: Error | any) {
      // TODO: Modify Error Message using code
      error.message = error?.code as String;

      return {
        userCredential: null,
        error,
      };
    }
  }

  async signinWithEmailPassword({
    email,
    password,
  }: SignupWithEmailPassword): Promise<AuthResponse> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      return { userCredential, error: null };
    } catch (error: Error | any) {
      // TODO: Modify Error Message using code
      error.message = error?.code as String;

      return {
        userCredential: null,
        error,
      };
    }
  }

  async logOut(): Promise<void | Error> {
    try {
      await signOut(this.auth);
    } catch (error) {
      return error as Error;
    }
  }

  getUser() {
    return this.auth.currentUser;
  }
}

const authService = new AuthService();

export default authService;

// Type
export type SignupWithEmailPassword = {
  email: string;
  password: string;
};
