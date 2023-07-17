import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import Header from "./components/Header";
import ScrollCategory from "./components/ScrollCategory";
import ScrollRestaurants from "./components/ScrollRestaurants";

export default function App() {
  return (
    <NativeBaseProvider>
      <Header />
      <ScrollCategory />
      <ScrollRestaurants />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
