import { router } from "expo-router";
import { Alert, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { loginUser } from '@/lib/services/auth_supabase';

import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function Login() {
  const [form, setForm] = useState({
    email:'ajinkya@gmail.com',
    password:'password'
  })

  const [isSubmitting , setIsSubmitting] = useState(false)

  const handleLogin = async () => {
    setIsSubmitting(true);

    const {error} = await loginUser(form.email, form.password)

    if (!error) {
      router.replace('/home')
    }

    setIsSubmitting(false);
  }

  return (
    <ScrollView className="h-full bg-dark">
      <SafeAreaView className="ml-[30] mr-[30]">
        <Text className="text-4xl text-light font-pbold mt-[80] pt-5 shadow-[2px_2px_14px_0px_rgba(255,_255,_255,_0.1)]">
          Login
        </Text>
        <Text className="text-xl text-light mt-1">
          Welcome back!
        </Text>

        <CustomInput 
          title="Email*"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-5"
        />

        <CustomInput 
          title="Password*"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e})}
          otherStyles="mt-5"
        />
        <View className="items-end">
          <Text className="text-lg text-gray-100 mt-4 mr-2">
            <Link href="/login" className='text-lg text-secondary-100 rounded-md' disabled={isSubmitting}>
              Forgot Password?
            </Link>
          </Text>
        </View>

        <CustomButton
          title="Log In"
          handlePress={handleLogin}
          containerStyles="mt-7 w-full"
          isLoading={isSubmitting}
        />

        <View className="items-center">
          <Text className="text-lg text-gray-100 mt-4">
            Don't have an account? {} 
            <Text 
                className='text-lg text-secondary-100 rounded-md' 
                onPress={()=>{router.replace('/register')}} 
                disabled={isSubmitting}>
                Register
              </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
