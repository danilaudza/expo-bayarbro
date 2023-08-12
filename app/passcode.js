import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native"
import { useCallback, useEffect, useRef, useState } from "react"
import { AntDesign } from "@expo/vector-icons"
import { MotiView } from "@motify/components"
import { useRouter } from "expo-router"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import BottomSheet from "./BottomSheet"

const { width } = Dimensions.get("window")
const pinLength = 4
const pinContainerSize = width / 3
const pinFullSize = pinContainerSize / pinLength
const pinSpacing = 10
const pinSize = pinFullSize - pinSpacing * 2

const dialPadSize = width * 0.2
const dialPadFontSize = dialPadSize * 0.4
const _gap = 14

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"]

const _colors = {
  primary: "white",
  secondary: "black",
}
function DialPad({ onPress }) {
  return (
    <FlatList
      data={dialPad}
      keyExtractor={(_, index) => index.toString()}
      numColumns={3}
      style={{ flexGrow: 0 }}
      columnWrapperStyle={{ gap: _gap * 2 }}
      contentContainerStyle={{ gap: _gap * 2 }}
      scrollEnabled={false}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            disabled={item === ""}
            onPress={() => {
              onPress(item)
            }}
          >
            <View
              style={{
                width: dialPadSize,
                height: dialPadSize,
                borderRadius: dialPadSize,
                borderWidth: typeof item === "number" ? 1 : 0,
                borderColor: "#d6d8e3",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item === "del" ? (
                <AntDesign
                  name="arrowleft"
                  size={dialPadFontSize}
                  color={_colors.secondary}
                />
              ) : (
                <Text
                  style={{
                    fontSize: dialPadFontSize,
                    color: _colors.secondary,
                  }}
                >
                  {item}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        )
      }}
    />
  )
}

export default function Passcode() {
  const navigate = useRouter()
  const ref = useRef(null)

  const onPress = useCallback(() => {
    ref.current.scrollTo(-150)
  }, [])

  const [code, setCode] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [mode, setMode] = useState("")

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const toggleMode = async () => {
    try {
      const newMode = mode === "error" ? "fine" : "error"
      await AsyncStorage.setItem("@mode", newMode)
      setMode(newMode)
    } catch (error) {
      console.error("Error toggling mode:", error)
    }
  }

  useEffect(() => {
    const firstLoad = async () => {
      try {
        const modeValue = await AsyncStorage.getItem("@mode")
        if (modeValue === null) {
          await AsyncStorage.setItem("@mode", "error")
          setMode("error")
        } else {
          setMode(modeValue)
        }
      } catch (err) {
        console.log(err)
        setMode("error")
      }
    }
    firstLoad()
  }, [])

  useEffect(() => {
    const check = async () => {
      try {
        setLoading(true)

        const modeValue = await AsyncStorage.getItem("@mode")
        await sleep(4000)
        if (modeValue === "error") {
          navigate.push("/error/home")
        } else if (modeValue === "fine") {
          navigate.push("/fine/home")
        }
      } catch (e) {
        console.log(e)
      }
    }

    if (code.length == pinLength) {
      check()
    }
  }, [code])

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: _colors.primary,
      }}
    >
      <View>
        <TouchableWithoutFeedback onLongPress={onPress} delayLongPress={3000}>
          <Image
            source={require("../assets/thinking.png")}
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
              marginBottom: 20,
            }}
          />
        </TouchableWithoutFeedback>
        <Text style={{ marginBottom: 60, fontSize: 20, fontWeight: "bold" }}>
          Masukkan Security Code Kamu
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: pinSpacing * 2,
          height: pinSize * 2,
          marginBottom: pinSize * 3,
          alignItems: "flex-end",
        }}
      >
        {[...Array(pinLength).keys()].map((i) => {
          const isSelected = !!code[i]
          return (
            <MotiView
              style={{
                width: pinSize,
                borderRadius: pinSize,
                height: pinSize,
                marginBottom: pinSize,
                borderColor: "#285CDB",
              }}
              animate={{
                backgroundColor: isSelected ? "#285CDB" : "white",
                borderWidth: isSelected ? 1 : 1.5,
                width: isSelected ? pinSize * 1.05 : pinSize,
                height: isSelected ? pinSize * 1.05 : pinSize,
              }}
              transition={{
                type: "timing",
                duration: "100",
              }}
            />
          )
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setCode((prev) => prev.slice(0, prev.length - 1))
          } else if (typeof item === "number") {
            if (code.length === pinLength) return
            setCode((prev) => [...prev, item])
          }
        }}
      />
      <BottomSheet ref={ref}>
        <View style={{ flex: 1, padding: 16, alignItems: "center" }}>
          <View style={{ gap: 12}}>
            <Text style={{ alignSelf: "center" }}>Current Mode: {mode}</Text>
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius: 4,
                elevation: 3,
                backgroundColor: "black",
              }}
              onPress={toggleMode}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 21,
                  fontWeight: "bold",
                  letterSpacing: 0.25,
                  color: "white",
                }}
              >
                Toggle
              </Text>
            </Pressable>
            <Image
              source={require("../assets/jempol.png")}
              style={{ width: 150, resizeMode: "contain" }}
            />
          </View>
        </View>
      </BottomSheet>
      {isLoading && (
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            opacity: 0.7,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
          }}
        >
          <ActivityIndicator size="large" color="#BBCFFF" />
        </View>
      )}
    </GestureHandlerRootView>
  )
}
