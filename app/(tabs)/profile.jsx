import { router } from "expo-router";
import { Alert, Text, View } from "react-native";

import { logoutUser } from "@/lib/services/auth_supabase";
import CustomButton from "@/components/CustomButton";

const handleLogout = async () => {
    const {error} = await logoutUser()

    if (!error) {
      router.replace('/')
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
