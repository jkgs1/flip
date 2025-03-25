import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Edit app/index.tsx to edit this skärm.</Text>
            <Link href={"/notes/index"}>Press here</Link>
        </View>
    );
}