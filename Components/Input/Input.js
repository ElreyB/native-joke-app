import React, { useState } from "react";
import styled from "styled-components";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.TextInput`
  height: 40px;
  width: 300px;
  border: 2px solid grey;
`;

const Button = styled.TouchableHighlight`
  background-color: blue;
  height: 40px;
  width: 100px;
  border: 1px solid grey;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
`;

export default function Input({ value, onChange }) {
  const fetchData = async () => {
    try {
      const responds = await fetch(
        `http://api.icndb.com/jokes/random/${value}`
      );
      const data = await responds.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <InputField
        keyboardType={"numeric"}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
      <Button onPress={() => fetchData()}>
        <ButtonText>Search</ButtonText>
      </Button>
    </Container>
  );
}
