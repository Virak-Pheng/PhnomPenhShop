import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { colors } from "../constants/theme";
import { useState } from "react";
import { FlatList } from "react-native";

export default function ProductsScreen() {
  const [searchText, setSearchText] = useState("");

  const products = [
    {
      id: 1,
      name: "Red fabric JBL cylinder",
      price: "$10.00",
      image: { uri: 'https://pngimg.com/uploads/wireless_speaker/small/wireless_speaker_PNG40.png' },
    },
    {
      id: 2,
      name: "Teal JBL cylinder",
      price: "$20.00",
      image: { uri: 'https://pngimg.com/uploads/wireless_speaker/small/wireless_speaker_PNG36.png' },
    },
    {
      id: 3,
      name: "Tall black party ",
      price: "$30.00",
      image: { uri: 'https://pngimg.com/uploads/wireless_speaker/small/wireless_speaker_PNG48.png' },
    },
    {
      id: 4,
      name: "Tall black cylinder",
      price: "$40.00",
      image: { uri: 'https://pngimg.com/uploads/wireless_speaker/small/wireless_speaker_PNG16.png' },
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Phnom Penh</Text>
        <Text style={styles.headerText}>Products</Text>
        <Image
          source={require("../assets/phnom-penh-red.png")}
          style={{ width: 40, height: 40 }}
        />
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <Image
            style={styles.searchIcon}
            source={require("../assets/search.png")}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor={colors.textMuted}
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        <Pressable
          style={styles.filterBar}
          onPress={() => {}}
          accessibilityRole="button"
          accessibilityLabel="Filter products"
        >
          <Image
            style={styles.filterIcon}
            source={require("../assets/filter.png")}
          />
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryContent}
      >
        {["All", "Electronics", "Clothing", "Home", "Books"].map((category) => (
          <Pressable
            key={category}
            style={styles.productCategory}
            onPress={() => {}}
            accessibilityRole="button"
            accessibilityLabel={`Filter by ${category}`}
          >
            <Text style={styles.productCategoryText}>{category}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <View style={styles.heroSection}>
        <Image
          source={{uri : 'https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG73.png'}}
          style={styles.heroImage}
        />
        <Text style={styles.heroText}>SHOP WITH US</Text>
      </View>

      <View style={styles.recommendationSection}>
        <Text style={styles.recommendationText}>Recommendation</Text>
        <Text style={styles.recommendationText}>See all</Text>
      </View>

      <FlatList
        data={filteredProducts}
        numColumns={2}
        contentContainerStyle={styles.productList}
        columnWrapperStyle={styles.productRow}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.text,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 10,
    gap: 10,
  },
  searchBar: {
    flex: 1,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
    color: colors.textMuted,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.text,
  },
  categoryContent: {
    gap: 8,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 4
  },
  filterBar: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    marginLeft: 8,
    borderColor: colors.border,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  productCategory: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  productCategoryText: {
    fontSize: 15,
    color: colors.text,

  },

  heroSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  heroImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  heroText: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    paddingLeft: 16,
  },
  recommendationSection: {
    flexDirection: "row",
    marginTop: 24,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  recommendationText: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.text,
  },
  productList: {
    paddingTop: 16,
    paddingBottom: 24,
  },

  productRow: {
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginBottom: 16,
  },

  productCard: {
    width: "48%",
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
  },

  productImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
    marginBottom: 8,
  },

  productName: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
  },

  productPrice: {
    marginTop: 6,
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },
});
