// middleware/useNetworkBlocker.tsx
import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { View, Text } from "react-native";

export function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(Boolean(state.isConnected));
    });
    return () => unsubscribe();
  }, []);

  return isConnected;
}

export function NoInternetOverlay() {
  return (
    <View className="absolute top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-80 items-center justify-center">
      <Text className="text-white text-lg font-bold">
        No internet connection
      </Text>
    </View>
  );
}
