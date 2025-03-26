import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack
        screenOptions={{
            headerShown: true,
        }}>
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="[noteId]" options={{headerShown: false}} />
    </Stack>;
}
