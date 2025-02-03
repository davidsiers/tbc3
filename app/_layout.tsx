import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return <Tabs screenOptions={{
    headerShadowVisible: true
    }}>
    <Tabs.Screen name="index" options={{href: null}} />
    <Tabs.Screen name="discover" options={{
      title: 'Discover',
      tabBarIcon: ({color, size}) => 
        <Ionicons name="compass" size={size} color={color} />
      }} />
    <Tabs.Screen name="events" options={{
      title: 'Events',
      headerShown: false,
      tabBarIcon: ({color, size}) => 
        <Ionicons name="albums" size={size} color={color} />
      }} />
    <Tabs.Screen name="sermons" options={{
      title: 'Sermons',
      tabBarIcon: ({color, size}) => 
        <Ionicons name="videocam" size={size} color={color} />
      }} />
    <Tabs.Screen name="account" options={{
      title: 'Account',
      tabBarIcon: ({color, size}) => 
        <Ionicons name="person-circle" size={size} color={color} />
      }} />
  </Tabs>;
}
