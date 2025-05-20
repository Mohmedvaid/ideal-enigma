export const parseFirebaseError = (code: string) => {
  const map: Record<string, string> = {
    "auth/email-already-in-use": "This email is already registered.",
    "auth/invalid-email": "Email format is invalid.",
    "auth/weak-password": "Password must be at least 6 characters.",
    "auth/user-not-found": "No user found with that email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/too-many-requests": "Too many failed attempts. Try again later.",
  };

  return map[code] || "Something went wrong. Please try again.";
};
