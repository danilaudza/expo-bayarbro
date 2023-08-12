import { Dimensions } from "react-native"
import React, { useCallback, useImperativeHandle } from "react"
import { Gesture, GestureDetector } from "react-native-gesture-handler"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated"

const { height: SCREEN_HEIGHT } = Dimensions.get("window")
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT / 1.5

const BottomSheet = React.forwardRef(({ children }, ref) => {
  const translateY = useSharedValue(100)
  const active = useSharedValue(false)

  const scrollTo = useCallback((destination) => {
    "worklet"
    active.value = destination !== 0
    translateY.value = withSpring(destination, { damping: 50 })
  }, [])

  useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo])

  const context = useSharedValue({ y: 0 })
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value }
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
    })
    .onEnd(() => {
      if (translateY.value > -SCREEN_HEIGHT / 3) {
        scrollTo(100)
      } else if (translateY.value < -SCREEN_HEIGHT / 2.7) {
        scrollTo(MAX_TRANSLATE_Y)
      }
    })

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    }
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          {
            height: SCREEN_HEIGHT,
            width: "100%",
            backgroundColor: "white",
            position: "absolute",
            top: SCREEN_HEIGHT,
            borderRadius: 25,
            shadowOffset: { width: 10, height: 10 },
            shadowColor: "black",
            shadowOpacity: 1,
            elevation: 20,
          },
          rBottomSheetStyle,
        ]}
      >
        <Animated.View
          style={{
            width: 75,
            height: 4,
            backgroundColor: "grey",
            alignSelf: "center",
            marginVertical: 15,
            borderRadius: 2,
          }}
        />
        {children}
      </Animated.View>
    </GestureDetector>
  )
})

export default BottomSheet
