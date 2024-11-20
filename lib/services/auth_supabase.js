import { Alert } from "react-native";
import {supabase} from "@/lib/supabase"

export async function registerUser(first_name, last_name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: first_name,
        last_name: last_name,
      },
    }
  })

  if (error) {
    Alert.alert(error.message);
  } else {
    Alert.alert('Account created successfully! Login to continue.');
  }

  return {data, error}
}

export async function loginUser(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    Alert.alert(error.message)
  } else {
    Alert.alert('Logged in successfully!');
  }

  return {error}
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    Alert.alert('Logout failed', error.message);
  } else {
    Alert.alert('Logged out successfully!');
  }

  return { error };
}