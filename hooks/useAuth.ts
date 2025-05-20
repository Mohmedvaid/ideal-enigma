import { useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { authService } from "@/services/authService";
import { useUserStore } from "@/store/userStore";
import { auth } from "@/lib/firebase";

export const useAuth = () => {
  const { user, loading, setUser, setLoading } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: User | null) => {
        setUser(firebaseUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    login: authService.login,
    register: authService.register,
    logout: authService.logout,
  };
};
