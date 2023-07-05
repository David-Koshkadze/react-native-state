import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamsList = {
  Home: undefined;
  FoodPreferences: undefined;
};

type NavigationProps = NavigationProp<RootStackParamsList, "FoodPreferences">;

export default function HomeScreen() {
  const navigaton = useNavigation<NavigationProps>();

  const handleFoodPreferencePress = () => {
    navigaton.navigate("FoodPreferences");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleFoodPreferencePress}
      >
        <Text>Food Preferences</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
