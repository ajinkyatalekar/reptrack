import { router } from "expo-router";
import { Text, View } from "react-native";
import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'

import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'

export default function Home() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


  return (
    <View className="h-full w-full justify-center items-center">
      <Text className="text-3xl">Home</Text>
      {session && session.user && <Text>{session.user.user_metadata.first_name}</Text>}
      {!session && <Text>Not logged in! Go to profile and click logout.</Text>}
    </View>
  );
}
