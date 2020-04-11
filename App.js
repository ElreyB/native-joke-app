import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Input from "./Components/Input/Input";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Input value={value} onChange={setValue} />
      {/* <TouchableHighlight
        onPress={() => setCount(count + 1)}
        style={styles.button}
      >
        <Text style={styles.text}>Increase {count}</Text>
      </TouchableHighlight> */}
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
    marginTop: 20,
    width: 100,
    height: 50,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // textAlign: "center",
  },
});
