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
        style={{
          height: 40,
          width: 300,
          borderColor: "grey",
          borderWidth: 2,
        }}
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
    height: 40,
    width: 300,
    borderColor: "grey",
    borderWidth: 2,
  },
});
