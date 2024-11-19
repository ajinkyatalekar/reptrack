import Button from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Landing Page</Text>
      <Button
        title="Register"
        handlePress={() => router.push('/register')}
      />
      <Button
        title="Sign In"
        handlePress={() => router.push('/sign-in')}
      />
    </View>
  );
}
