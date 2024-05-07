import CONF from "@/conf/conf";
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

  async signupWithEmailPassword({ email, password }: SignupWithEmailPassword) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );

      // console.log(userCredential);
      return userCredential;
    } catch (error) {
      return error;
    }
  }

  async signinWithEmailPassword({ email, password }: SignupWithEmailPassword) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      // console.log(user);
    } catch (error) {}
  }

  async signupWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (!credential) {
        throw new Error("credential not found");
      }

      // console.log("user login");

      localStorage.setItem("OAuthCredential", JSON.stringify(credential));

      return result.user;
    } catch (error) {
      // console.log("error: ", error);
      return error;
    }
  }

  async logOut() {
    // localStorage.removeItem("OAuthCredential");
    try {
      const response = await signOut(this.auth);
      // console.log("User Logout");
    } catch (error) {
      // console.log("Logout Error: ", error);
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
