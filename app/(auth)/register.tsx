import Button from "@/components/Button";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function Register() {
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Register</Text>
      <Button
        title="Register"
        handlePress={() => router.push('/home')}
      />
    </View>
  );
}
