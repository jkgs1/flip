import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Home() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>This is settings.tsx</Text>
        </View>
    );
}