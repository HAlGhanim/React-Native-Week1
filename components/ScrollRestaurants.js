import React from "react";
import { View, FlatList, Image, Text, StyleSheet } from "react-native";

const restaurantData = [
  {
    id: 1,
    name: "The Foundry",
    image:
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
    rating: 4.5,
    deliveryTime: "30 min",
    cuisine: "French",
  },
  {
    id: 2,
    name: "Buffs",
    image:
      "https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg",
    rating: 4.2,
    deliveryTime: "45 min",
    cuisine: "American",
  },
  {
    id: 3,
    name: "The Forest",
    image:
      "https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_1280,c_limit/DSC_8367-Edit-W.png",
    rating: 4.8,
    deliveryTime: "20 min",
    cuisine: "Italian",
  },
  {
    id: 4,
    name: "Crimson Lounge",
    image:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg",
    rating: 4.1,
    deliveryTime: "35 min",
    cuisine: "Middle Eastern",
  },
  {
    id: 5,
    name: "The Skyline",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/1200px-Restaurant_N%C3%A4sinneula.jpg",
    rating: 4.6,
    deliveryTime: "40 min",
    cuisine: "Oriental",
  },
];

const ScrollRestaurants = () => {
  const renderRestaurantItem = ({ item }) => (
    <View style={styles.restaurantItem}>
      <Image source={item.image} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantRating}>Rating: {item.rating}</Text>
        <Text style={styles.restaurantDeliveryTime}>
          Delivery Time: {item.deliveryTime}
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={restaurantData}
      renderItem={renderRestaurantItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  restaurantItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  restaurantImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  restaurantRating: {
    fontSize: 14,
    marginBottom: 5,
  },
  restaurantDeliveryTime: {
    fontSize: 14,
  },
});

export default ScrollRestaurants;
