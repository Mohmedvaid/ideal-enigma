import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export const authService = {
  async register(email: string, password: string): Promise<User> {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCred.user;
  },

  async login(email: string, password: string): Promise<User> {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return userCred.user;
  },

  async logout(): Promise<void> {
    await signOut(auth);
  },
};
