import Button from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function SignIn() {
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">SignIn</Text>
      <Button
        title="Sign In"
        handlePress={() => router.push('/home')}
      />
    </View>
  );
}
