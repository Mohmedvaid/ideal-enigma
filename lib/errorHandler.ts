// lib/errorHandler.ts
import { BaseError } from "@/errors/BaseError";
import { Alert } from "react-native";

export function handleError(error: unknown) {
  if (__DEV__) {
    console.error("[handleError]", error);
  }

  if (error instanceof BaseError) {
    Alert.alert("Error", error.message);
  } else if (error instanceof Error) {
    Alert.alert("Unexpected Error", error.message);
  } else {
    Alert.alert("Unknown Error", "Something went wrong");
  }
}
