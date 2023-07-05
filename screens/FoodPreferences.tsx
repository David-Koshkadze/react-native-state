import React from "react";
import { Controller, useForm } from "react-hook-form";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function FoodPreferences() {
  const { control, handleSubmit, setValue } = useForm();

  const [selectedItems, setSelectedItems] = React.useState([]);

  const foodPreferences = [
    "Pizza",
    "Burger",
    "Sushi",
    "Pasta",
    "Salad",
    "Ice Cream",
    "Tacos",
    "Steak",
    "Ramen",
    "Curry",
  ];

  function onSubmit(data: any) {
    console.log("Submit Data", data);
  }

  function handleItemClick(item: any | never) {
    const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((selectedItem) => selectedItem !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedItems);
    setValue("foodPreferences", updatedItems);
  }

  return (
    <View>
      {foodPreferences.map((item) => (
        <Controller
          key={item}
          control={control}
          render={({ field }) => (
            <TouchableOpacity
              onPress={() => handleItemClick(item)}
              style={[
                styles.itemContainer,
                {
                  backgroundColor: selectedItems.includes(item)
                    ? "#c1ffc1"
                    : "transparent",
                },
              ]}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          name="foodPreferences"
          defaultValue={selectedItems}
        />
      ))}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
