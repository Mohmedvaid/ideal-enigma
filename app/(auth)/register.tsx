import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { registerSchema, RegisterSchema } from "@/validation/registerSchema";
import { router } from "expo-router";
import { parseFirebaseError } from "@/lib/parseFirebaseError";
import { logDev } from "@/lib/devLogger";

export default function RegisterScreen() {
  const { register: registerUser } = useAuth();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser(data.email, data.password);
      router.replace("/(app)/jobs"); // Redirect after signup
    } catch (err: any) {
      const msg = parseFirebaseError(err.code);
      Alert.alert("Registration Failed", msg);
      logDev("Register error", err.code, err.message);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-4 text-black">Register</Text>

      <TextInput
        className="border border-gray-300 p-2 rounded mb-2 text-black"
        placeholder="Email"
        placeholderTextColor="#999"
        autoCapitalize="none"
        onChangeText={(text) => setValue("email", text)}
      />
      {errors.email && (
        <Text className="text-red-500">{errors.email.message}</Text>
      )}

      <TextInput
        className="border border-gray-300 p-2 rounded mb-2 text-black"
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={(text) => setValue("password", text)}
      />
      {errors.password && (
        <Text className="text-red-500">{errors.password.message}</Text>
      )}

      <Pressable
        className="bg-black py-3 rounded mt-4"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center font-semibold">
          Create Account
        </Text>
      </Pressable>
    </View>
  );
}
