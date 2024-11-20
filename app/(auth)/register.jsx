import { router } from "expo-router";
import { Alert, ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import CustomButton from "@/components/CustomButton";

import { useState } from "react";
import CustomInput from "../../components/CustomInput";

import { registerUser, } from "@/lib/services/auth";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const [form, setForm] = useState({
    first_name:'',
    last_name:'',
    email:'',
    password:''
  })

  const [isSubmitting , setIsSubmitting] = useState(false)

  const handleRegister = async () => {
    setIsSubmitting(true);
    try {
      const result = await registerUser(form.first_name, form.last_name, form.email, form.password)
      router.replace('/home')
    } catch (error) {
      Alert.alert(error.message)
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <ScrollView className="h-full bg-dark">
      <SafeAreaView className="ml-[30] mr-[30]">
        <Text className="text-4xl text-light font-pbold mt-[80] pt-5 shadow-[2px_2px_14px_0px_rgba(255,_255,_255,_0.1)]">
          Register
        </Text>
        <Text className="text-xl text-light mt-1">
          Let's start tracking workouts!
        </Text>
          <View className="justify-between flex-row">
            <CustomInput 
              title="First Name*"
              value={form.first_name}
              onChange={(e) => setForm({ ...form, first_name: e})}
              otherStyles="mt-7 w-[47%]"
            />
            <CustomInput 
              title="Last Name*"
              value={form.last_name}
              onChange={(e) => setForm({ ...form, last_name: e})}
              otherStyles="mt-7 w-[47%]"
            />
          </View>
          <CustomInput 
            title="Email*"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-5"
            keyboardType={'email-address'}
          />
          <CustomInput 
            title="Password*"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-5"
          />
          
          <CustomButton
            title="Register"
            handlePress={handleRegister}
            containerStyles="mt-7 w-full"
            isLoading={isSubmitting}
          />

          <View className="items-center">
            <Text className="text-lg text-gray-100 mt-4">
              Already have an account? {} 
              <Link href="/login" className='text-lg text-secondary-100 rounded-md' disabled={isSubmitting}>
              Login
            </Link>
            </Text>
          </View>

      </SafeAreaView>
    </ScrollView>
  );
}
