import { View, Text, TextInput, Pressable, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/validation/loginSchema";
import { useAuth } from "@/hooks/useAuth";
import { router } from "expo-router";

export default function LoginScreen() {
  const { login } = useAuth();

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data.email, data.password);
      router.replace("/(app)/jobs"); // Redirect after login
    } catch (err: any) {
      Alert.alert("Login Failed", err.message);
    }
  };

  return (
    <View className="flex-1 justify-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-4 text-black">Login</Text>

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
        <Text className="text-white text-center font-semibold">Login</Text>
      </Pressable>
    </View>
  );
}
