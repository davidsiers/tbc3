import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name="index" options={{href: null}} />
    <Tabs.Screen name="discover" />
    <Tabs.Screen name="events" />
    <Tabs.Screen name="sermons" />
    <Tabs.Screen name="account" />
  </Tabs>;
}
