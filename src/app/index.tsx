import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { colors, spacing, typography } from "../constants/theme";
import BrandHeader from "../components/BrandHeader";
import Button from "../components/Button";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BrandHeader />
      <View style={styles.content}>
        <Image
          source={require("../assets/phnom-penh-red.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.textContent1}>PHNOM PENH SHOP</Text>
        <Text style={styles.textContent2}>
          Modern essentials delivered across{" "}
        </Text>
        <Text style={styles.textContent2}>Cambodia</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button title="Get Started" />
        </View>

        <View style={styles.signInText}>
          <Text style={styles.textFooter}>Aleady have an account?</Text>
          <Link href="./auth/signin" style={styles.signInLink}>
            Sign in
          </Link>
        </View>

        <View style={styles.footerContent}>
          <Image
            source={require("../assets/verified.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text style={styles.textFooterContent}>
            Bakong KHQR & Fast Delivery support
          </Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },

  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContent1: {
    fontSize: typography.title,
    fontWeight: "bold",
    color: colors.text,
    marginTop: spacing.md,
  },
  textContent2: {
    fontSize: typography.body,
    fontWeight: "bold",
    color: colors.text,
  },

  footer: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 360,
    paddingHorizontal: spacing.lg,
  },

  textFooter: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
    marginTop: 10,
  },
  footerContent: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  textFooterContent: {
    fontSize: typography.body,
    fontWeight: "bold",
    color: colors.textMuted,
  },
  signInText: {
    flexDirection: "row",
    alignItems: "baseline",
    marginTop: spacing.sm,
  },
  signInLink: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: "bold",
  },
});
