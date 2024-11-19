import { router } from "expo-router";
import { Alert, Text, View } from "react-native";
import { useState } from "react";

import { loginUser } from '@/lib/services/auth'

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function Login() {
  const [form, setForm] = useState({
    email:'a@a.a',
    password:'password'
  })

  const handleLogin = async () => {
    try {
      const result = await loginUser(form.email, form.password)
      router.replace('/home')
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Login</Text>

      <CustomInput 
        title="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e })}
      />
      <CustomInput 
        title="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e})}
      />

      <CustomButton
        title="Sign In"
        handlePress={handleLogin}
      />
    </View>
  );
}
