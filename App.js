import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Input from "./Components/Input/Input";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Input value={value} onChange={setValue} />
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
});
