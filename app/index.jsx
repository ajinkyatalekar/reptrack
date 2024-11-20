import { Redirect, router } from "expo-router";
import { Text, View, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

import CustomButton from "@/components/CustomButton";

import welcomeImage from '../assets/images/landing/landing.png'
import bulletImage1 from '../assets/images/landing/walk.png'
import bulletImage2 from '../assets/images/landing/sit.png'
import bulletImage3 from '../assets/images/landing/run.png'

import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function Index() {

  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <ScrollView className="h-full bg-dark">
      <SafeAreaView className="ml-[30] mr-[30]">

        <View className="justify-center items-center">
          <Image 
            source={welcomeImage}
            className="h-[240] w-[240] mb-5 rounded-3xl"
          />
        </View>

        <Text className="text-6xl text-light font-pbold mb-[30] shadow-[2px_2px_14px_0px_rgba(255,_255,_255,_0.1)]">
          Welcome to { }
          <Text className="text-secondary">
            RepLog
          </Text>!
        </Text>

          <View>
            <Image 
              source={bulletImage1}
              className="h-[40] w-[40] absolute rounded-3xl"
            />
            <Text className="text-lg text-gray -mt-4 ml-[50]">
              <Text className="text-light text-xl">Track</Text>{`\n`}
              Track your weights, reps, and sets easily.{`\n`}
            </Text>
          </View>
          <View>
            <Image 
              source={bulletImage2}
              className="h-[40] w-[40] absolute rounded-3xl"
            />
            <Text className="text-lg text-gray -mt-4 ml-[50]">
              <Text className="text-light text-xl">Analyze</Text>{`\n`}
              Visualize your progress and monitor improvements over time.{`\n`}
            </Text>
          </View>
          <View>
            <Image 
              source={bulletImage3}
              className="h-[40] w-[40] absolute rounded-3xl"
            />
            <Text className="text-lg text-gray -mt-4 ml-[50]">
              <Text className="text-light text-xl">Discover</Text>{`\n`}
              Discover others' workout routines and progress!
            </Text>
          </View>
          
          <View className="justify-between flex-row mt-[40]">
            <CustomButton
              title="Login"
              handlePress={() => router.push('/login')}
              inverted
            />
            <CustomButton
              title="Register"
              handlePress={() => router.push('/register')}
            />
          </View>
      </SafeAreaView>
    </ScrollView>

  );
}
