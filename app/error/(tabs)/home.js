import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { errItems } from "../../../utils/items"

const home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#e3eafa",
      }}
    >
      <StatusBar />
      <Image
        source={require("../../../assets/errorlogo.png")}
        style={{ width: 64, height: 32, marginHorizontal: 10 }}
      />
      {/* <Logo height={32} width={64} style={{ marginHorizontal: 10 }} /> */}
      <LinearGradient
        colors={["#ff0000", "#ff0001"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderColor: "black",
          marginHorizontal: 20,
          marginTop: 10,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../../assets/errorlogo.png")}
            style={{ width: 72, height: 72, transform: [{ scaleX: -1 }] }}
          />
          <View>
            <Text
              style={{ marginBottom: 5, fontStyle: "italic", color: "white" }}
            >
              BayarCoins
            </Text>
            <Text style={{ fontSize: 12, color: "white" }}>Total Saldo</Text>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={{ fontWeight: "bold", color: "#6292fc" }}>Rp </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  marginBottom: 14,
                  color: "white",
                }}
              >
                Response type: "basic", url: "httpx://bayarbro.io", redirected:
                false, status: 404, ok: false, statusText: "Not Found", headers:
                Headers, body: ReadableStream, bodyUsed: false
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="add-circle-outline" size={24} color="white" />
            <Text style={{ fontSize: 12, color: "white" }}>Top Up</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="arrow-circle-up" size={24} color="white" />
            <Text style={{ fontSize: 12, color: "white" }}>Transfer</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="save-alt" size={24} color="white" />
            <Text style={{ fontSize: 12, color: "white" }}>Tarik Tunai</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <MaterialIcons name="history" size={24} color="white" />
            <Text style={{ fontSize: 12, color: "white" }}>History</Text>
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 14,
          // padding: 14,
          backgroundColor: "#fff",
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
          <View>
            <Text style={{ fontSize: 24, color: "#ff0000" }}>
              WARN Possible Unhandled Promise Rejection (id: 0): ReferenceError:
              Property 'Keyboard' doesn't exist ReferenceError: Property
              'Keyboard' doesn't exist at ?anon_0_
              (http://192.168.0.156:19000/app\index.bundle//&platform=android&hot=false&dev=true&minify=false&modulesOnly=true&runModule=false&shallow=true:52:9)
              at next (native) at asyncGeneratorStep
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:4665:26)
              at _next
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:4684:29)
              at tryCallOne
              (/Users/kudo/01_Work/Repos/expo/expo/android/versioned-react-native/ReactAndroid/hermes-engine/.cxx/MinSizeRel/5a4n485h/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:53:16)
              at anonymous
              (/Users/kudo/01_Work/Repos/expo/expo/android/versioned-react-native/ReactAndroid/hermes-engine/.cxx/MinSizeRel/5a4n485h/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:139:27)
              at apply (native) at anonymous
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:29702:26)
              at _callTimer
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:29621:17)
              at _callReactNativeMicrotasksPass
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:29651:17)
              at callReactNativeMicrotasks
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:29814:44)
              at __callReactNativeMicrotasks
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:2817:46)
              at anonymous
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:2629:45)
              at __guard
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:2801:15)
              at flushedQueue
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:2628:21)
              at invokeCallbackAndReturnFlushedQueue
              (http://192.168.0.156:19000/index.bundle//&platform=android&dev=true&hot=false:2622:33)
            </Text>
          </View>
          <View style={{ height: 10, backgroundColor: "#f1f1f1" }} />
          <View style={{ padding: 14 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              <Text>Kenali </Text>
              <Text style={{ color: "#285CDB" }}>
                edab563346cd13c3dadbefa17bad1fcd9132439f5738ad66dde48d3e144d05fc!{" "}
              </Text>
              <Text>Lebih Dekat</Text>
            </Text>
            <Text style={{ color: "#9e9e9e", marginVertical: 6 }}>
              Yuk cek tips berikut bestie!
            </Text>
            <FlatList
              data={errItems}
              style={{ flexGrow: 0, marginVertical: 10 }}
              nestedScrollEnabled
              horizontal
              contentContainerStyle={{ gap: 14 }}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity key={item.id}>
                    <Image
                      source={item.img}
                      style={{
                        width: 150,
                        height: 180,
                        resizeMode: "cover",
                      }}
                    />
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={{ height: 10, backgroundColor: "#f1f1f1" }} />
          <View style={{ padding: 16, gap:14 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              <Text>Ikuti event </Text>
              <Text style={{ color: "#285CDB" }}>BayarBro! </Text>
            </Text>
            <Image
              source={require("../../../assets/bannererr.png")}
              style={{
                width: "100%",
                height: 200,
                resizeMode: "contain",
                borderRadius: 10,
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default home
