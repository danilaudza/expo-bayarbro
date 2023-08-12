import {
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import React from "react"
import { MaterialIcons } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"
import { appItems, kenalItems } from "../../../utils/items"
import Logo from "../../../assets/logo.svg"

const home = () => {
  const saldo = Math.floor(Math.random() * (5000000 - 1000000 + 1)) + 1000000
  const { width: SCREEN_WIDTH } = Dimensions.get("window")

  const numberWithCommas = (x) => {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x)) x = x.replace(pattern, "$1.$2")
    return x
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#e3eafa",
      }}
    >
      <StatusBar />
      <Logo height={32} width={64} style={{ marginHorizontal: 10 }} />
      <LinearGradient
        colors={["#285cdb", "#3c6bde"]}
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
            source={require("../../../assets/cool.png")}
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
                {numberWithCommas(saldo)}
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
            <FlatList
              data={appItems}
              style={{ flexGrow: 0, marginVertical: 10, padding: 14 }}
              numColumns={4}
              nestedScrollEnabled
              scrollEnabled={false}
              columnWrapperStyle={{ gap: 14 }}
              contentContainerStyle={{ gap: 14 }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={{ flex: 1 / 4, justifyContent: "space-around" }}
                  >
                    <View
                      key={item.id}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <View>{item.img}</View>
                      <Text style={{ textAlign: "center" }}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View style={{ height: 10, backgroundColor: "#f1f1f1" }} />
          <View style={{ padding: 14 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              <Text>Kenali </Text>
              <Text style={{ color: "#285CDB" }}>BayarBro! </Text>
              <Text>Lebih Dekat</Text>
            </Text>
            <Text style={{ color: "#9e9e9e", marginVertical: 6 }}>
              Yuk cek tips berikut bestie!
            </Text>
            <FlatList
              data={kenalItems}
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
              source={require("../../../assets/banner.png")}
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
