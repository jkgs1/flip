import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: "red"}}>
            {<Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />}
            {<Tabs.Screen
                name="notes"
                options={{
                    title: 'Files',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="file-o" color={color} />,
                }}
            />}
            {<Tabs.Screen
                name="edit"
                options={{
                    title: "Edit",
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="pencil-square-o" color={color}/>
                }}
            />}
            {<Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />}
        </Tabs>
    )
}