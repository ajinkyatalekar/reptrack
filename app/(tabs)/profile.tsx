import { router } from "expo-router";
import { Alert, Text, View } from "react-native";

import { logoutUser } from "@/lib/services/auth";
import CustomButton from "@/components/CustomButton";

const handleLogout = async () => {
  try {
    const result = await logoutUser()

    router.replace('/')
  } catch (error : any) {
    Alert.alert(error)
    throw new Error(error)
  }
}

export default function Profile() {
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Profile</Text>
      <CustomButton
        title="Logout"
        handlePress={handleLogout}
      />
    </View>
  );
}
