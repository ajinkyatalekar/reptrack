import { router } from "expo-router";
import { Alert, ScrollView, Text, View, Image } from "react-native";

import CustomButton from "@/components/CustomButton";

import { useState } from "react";
import CustomInput from "../../components/CustomInput";

import { registerUser, } from "@/lib/services/auth";
import { SafeAreaView } from "react-native-safe-area-context";

import welcomeImage from '@/assets/images/landing/landing.png'

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
    <ScrollView className="h-full bg-dark">
      <SafeAreaView className="ml-[30] mr-[30]">
        <Text className="text-4xl text-light font-pbold mt-[80] pt-5">
          Register
        </Text>
        <Text className="text-xl text-light mt-2">
          Let's start tracking workouts!
        </Text>

          <CustomInput 
            title="First Name"
            value={form.first_name}
            onChange={(e) => setForm({ ...form, first_name: e})}
            otherStyles="mt-7"
          />
          <CustomInput 
            title="Last Name"
            value={form.last_name}
            onChange={(e) => setForm({ ...form, last_name: e})}
            otherStyles="mt-7"
          />
          <CustomInput 
            title="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
          />
          <CustomInput 
            title="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
          />
          
          <CustomButton
            title="Register"
            handlePress={handleRegister}
            containerStyles="mt-7 w-full"
          />

      </SafeAreaView>
    </ScrollView>
  );
}
