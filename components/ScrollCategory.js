import { Image, ScrollView, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});

const ScrollCategory = () => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSFQDZNmAQ2sVYIIc9y7BiDYJ9zLScjY0pgf7iRq0U&s",
        }}
      />
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCqWE9I3izVCcukqYUn3olomYNOQqCMv_60Eg40Es&s",
        }}
      />
      <Image
        style={styles.cardImage}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0W0M1AIOdMAUjYM1Xs8NJbxwwrgifnJqZfuOWqR-d&s",
        }}
      />
    </ScrollView>
  );
};

export default ScrollCategory;
