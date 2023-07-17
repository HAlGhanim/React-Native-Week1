import { Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/7216/7216128.png",
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2771/2771401.png",
        }}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/263/263142.png",
        }}
      />
    </SafeAreaView>
  );
};

export default Header;
