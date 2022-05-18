import { StyleSheet } from "react-native";
import { Platform } from "react-native";
export default StyleSheet.create({
  globalStyle: {
    fontFamily: "Syne",
  },
  bold: {
    fontFamily: Platform.select({ ios: "Syne", android: "Syne Bold 700" }),
    fontWeight: Platform.select({ ios: "700", android: null }),
  },
  extraBold: {
    fontFamily: Platform.select({ ios: "Syne", android: "Syne ExtraBold 800" }),
    fontWeight: Platform.select({ ios: "800", android: null }),
  },
  light: {
    ...Platform.select({
      ios: {
        fontFamily: "Syne",
        fontWeight: "700",
      },
      android: {
        fontFamily: "Syne-SemiBold",
      },
    }),
  },
});
