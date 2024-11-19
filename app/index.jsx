import CustomButton from "@/components/CustomButton";
import { getCurrentUser } from "@/lib/services/auth";
import { Redirect, router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {

  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Landing Page</Text>
      <CustomButton
        title="Register"
        handlePress={() => router.push('/register')}
      />
      <CustomButton
        title="Login"
        handlePress={() => router.push('/login')}
      />
    </View>
  );
}
