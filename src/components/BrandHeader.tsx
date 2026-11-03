import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
export default function BrandHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.textHeader}>PHNOM PENH</Text>
      <Text style={styles.textHeader}>KHR . USD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    // gap: 150,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeader: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
});
