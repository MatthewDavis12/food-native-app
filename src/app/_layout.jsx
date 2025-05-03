import { Stack } from "expo-router";
import { AuthProvider } from "@context/AuthContext";

export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack screenOptions={{
                headerShown: false,
                animation: 'fade_from_bottom',
                animationDuration: 200,
            }}>
                <Stack.Screen name="login/index" />
                <Stack.Screen name="home/index" />
            </Stack>
        </AuthProvider>
    )
}