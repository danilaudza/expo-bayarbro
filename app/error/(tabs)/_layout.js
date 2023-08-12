import { Tabs } from "expo-router"
import { AntDesign } from '@expo/vector-icons'; 

const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel:false, headerShown:false}}>
        <Tabs.Screen name="home" options={{ tabBarIcon: () => <AntDesign name="home" size={24} color='black'/>}}/>
        <Tabs.Screen name="analisis" options={{tabBarIcon: () => <AntDesign name='linechart' size={24} color='black'/>}}/>
        <Tabs.Screen name="transaksi" options={{ tabBarIcon: () => <AntDesign name="profile" size={24} color='black'/>}}/>
        <Tabs.Screen name="profile" options={{ tabBarIcon: () => <AntDesign name="user" size={24} color='black'/>}}/>
    </Tabs>
  )
}

export default _layout