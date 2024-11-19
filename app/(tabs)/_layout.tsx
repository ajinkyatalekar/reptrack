import { Stack, Tabs } from "expo-router";

export default function TabsLayout() {
    const tabOptions = {
        headerShown:false
    }

  return (
    <Tabs>
        <Tabs.Screen 
            name="home"
            options={tabOptions}
        />
        <Tabs.Screen
            name="routines"
            options={tabOptions}
        />
        <Tabs.Screen
            name="statistics"
            options={tabOptions}
        />
        <Tabs.Screen
            name="profile"
            options={tabOptions}
        />
    </Tabs>
  )
}
