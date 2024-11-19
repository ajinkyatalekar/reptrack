import { router } from "expo-router";
import { Alert, Text, View } from "react-native";

import CustomButton from "@/components/CustomButton";

import { registerUser } from "@/lib/services/auth";
import { useState } from "react";
import CustomInput from "../../components/CustomInput";

export default function Register() {
  const [form, setForm] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })

  const handleRegister = async () => {
    try {
      const result = await registerUser(form.first_name, form.last_name, form.email, form.password)
      router.replace('/home')
    } catch (error) {
      Alert.alert(error.message)
    }
  }
  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Register</Text>

      <CustomInput 
        title="First Name"
        value={form.first_name}
        onChange={(e) => setForm({ ...form, first_name: e})}
      />
      <CustomInput 
        title="Last Name"
        value={form.last_name}
        onChange={(e) => setForm({ ...form, last_name: e})}
      />
      <CustomInput 
        title="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e})}
      />
      <CustomInput 
        title="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e})}
      />
      
      <CustomButton
        title="Register"
        handlePress={handleRegister}
      />
    </View>
  );
}
