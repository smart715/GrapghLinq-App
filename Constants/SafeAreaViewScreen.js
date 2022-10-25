import { StatusBar, Platform, SafeAreaView } from "react-native";

export const SafeAreaViewScreen = ({ children, bg = "#ffffff" }) => {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: bg,
        flex: 1,
      }}
    >
      {children}
    </SafeAreaView>
  );
};