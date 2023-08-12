import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React from "react"
import { Delete } from "lucide-react-native"

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const verification = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#151515",
    },
    iconHeader: {
      color: "#151515",
    },
    svgWrapper: {
      height: 100,
    },
    content: {
      backgroundColor: "#5566ee",
      flex: 1,
      marginTop: -10,
      paddingHorizontal: 40,
      paddingTop: 20,
    },
    title: {
      textTransform: "uppercase",
      color: "#fff",
      fontWeight: "bold",
      fontSize: 24,
    },
    subtitle: {
      color: "#a2b2fd",
      textAlign: "center",
      paddingVertical: 20,
      fontSize: 18,
      fontWeight: "600",
    },
    otpWrapper: {
      flexDirection: "row",
      marginVertical: 10,
      marginHorizontal: 'auto'
    },
    otpButton: {
      width: 60,
      height: 60,
      borderRadius: 60,
      marginHorizontal: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    textOtp: {
      fontSize: 25,
      fontWeight: "bold",
    },
    buttonWrapper: {
      alignItems: "center",
      marginVertical: 20,
    },
    buttonResend: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#8a9af8",
      textTransform: "uppercase",
    },
    buttonVerifyWrapper: {
      alignItems: "center",
      marginVertical: 10,
    },
    buttonVerify: {
      backgroundColor: "#7788ef",
      paddingHorizontal: 30,
      paddingVertical: 20,
      width: "100%",
      alignItems: "center",
      borderRadius: 10,
    },
    textButtonVerify: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    numpmadWrapper: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 20,
    },
    numpad: {
      alignSelf: "center",
    },
    numpadNumber: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: 24,
    },
  })

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#ffffff"} barStyle={"dark-content"} />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text>//</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headerTitle}>verification Code</Text>
        </View>
        <View style={{ width: 20 }}></View>
      </SafeAreaView>
      <View>
        <View style={styles.svgWrapper}></View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Confirmation</Text>
        <Text style={styles.subtitle}>
          Please type your PIN to progress further
        </Text>
        <View style={styles.otpWrapper}>
          <View style={[styles.otpButton, { backgroundColor: "#7788ef" }]}>
            <Text style={[styles.textOtp, { color: "#fff" }]}>8</Text>
          </View>
          <View style={[styles.otpButton, { backgroundColor: "#fff" }]}>
            <Text style={[styles.textOtp]}>4</Text>
          </View>
          <View style={[styles.otpButton, { backgroundColor: "#7788ef" }]}>
            <Text style={[styles.textOtp, { color: "#fff" }]}>1</Text>
          </View>
          <View style={[styles.otpButton, { backgroundColor: "#7788ef" }]}>
            <Text style={[styles.textOtp, { color: "#fff" }]}>7</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonResend}>Resend Code</Text>
        </View>
        <View style={styles.buttonVerifyWrapper}>
          <TouchableOpacity style={styles.buttonVerify}>
            <Text style={styles.textButtonVerify}>Verify</Text>
          </TouchableOpacity>
        </View>
        <View>
          {numbers.map((items, index) => (
            <View key={index} style={styles.numpmadWrapper}>
              {items.map((number) => (
                <View key={number} style={styles.numpad}>
                  <Text style={styles.numpadNumber}>{number}</Text>
                </View>
              ))}
            </View>
          ))}
          <View style={styles.numpmadWrapper}>
            <View style={{ width: 24 }} />
            <View style={styles.numpad}>
              <Text style={styles.numpadNumber}>0</Text>
            </View>
            <View style={styles.numpad}>
              <Delete name="delete" size={24} style={{ color: "#fff" }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default verification
