import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: true
            }}>
            <Stack.Screen name="index" options={{ title: 'Events' }} />
            <Stack.Screen name="[id]" options={{ title: 'Event Details' }} />
        </Stack>
    )
};

export default Layout;