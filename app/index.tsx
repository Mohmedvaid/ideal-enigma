import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

// temp links for testing
export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-white space-y-4">
      <Text className="text-black text-xl mb-6">It Works 🔥</Text>

      <Pressable
        className="bg-black px-6 py-3 rounded"
        onPress={() => router.push("/(auth)/login")}
      >
        <Text className="text-white">Go to Login</Text>
      </Pressable>

      <Pressable
        className="bg-gray-800 px-6 py-3 rounded"
        onPress={() => router.push("/(auth)/register")}
      >
        <Text className="text-white">Go to Register</Text>
      </Pressable>
    </View>
  );
}
