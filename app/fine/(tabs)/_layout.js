import { Tabs } from "expo-router"
import { AntDesign } from "@expo/vector-icons"

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              size={24}
              color={focused ? "#285CDB" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="analisis"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="linechart"
              size={24}
              color={focused ? "#285CDB" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="profile"
              size={24}
              color={focused ? "#285CDB" : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? "#285CDB" : "black"}
            />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout
