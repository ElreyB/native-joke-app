import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

export default function Input({ value, onChange }) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={"numeric"}
        value={value}
        onChangeText={(text) => onChange(text)}
        style={styles.input}
      />
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "gray",
    height: 40,
    width: 300,
    backgroundColor: "#222",
    color: "#000",
  },
});
