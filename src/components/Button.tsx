import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors, spacing, typography, radius } from "../constants/theme";

type ButtonProps = {
  title?: string;
  onPress?: () => void;
};

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
      accessibilityLabel="button"
    >
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 50,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.button,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: colors.background,
    fontSize: typography.button,
    fontWeight: "bold",
  },
});
