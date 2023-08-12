import { StyleSheet, View, Text } from "react-native"
import React from "react"

const analisis = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Oops!</Text>
        <Text style={styles.subtitle}>Terjadi Error</Text>
        <Text>
          Invariant Violation: Object are not valid as a React child (found:
          Error: ERRROOORR). if you mean to render a collection of children, use
          embuh bingung
        </Text>
        <Text>    in RCTText (at Text.js:153)</Text>
        <Text>    in Component (at Component.js:424)</Text>
        <Text>    in Child (at Child.js:123)</Text>
        <Text>    in Procs (at Procs.js:14)</Text>
        <Text>    in Login (at Login.js:155)</Text>
        <Text>    in SigningFucn (at SigFun.js:11)</Text>
        <Text>    in View (at View.js:534)</Text>
        <Text>    in Passcode (at Pass.js:13)</Text>
        <Text>    in Auth (at auth.js:53)</Text>
        <Text>    in User (at Users.js:13)</Text>
        <Text>    in Chuaks (at Hiya.js:3)</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
})

export default analisis
