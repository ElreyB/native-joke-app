import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import styled from "styled-components";
import Input from "./Components/Input";
import Tinder from "./Components/Tinder";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [value, setValue] = useState("");
  const [jokes, setJokes] = useState([]);

  const fetchData = async () => {
    try {
      const responds = await fetch(
        `http://api.icndb.com/jokes/random/${value}`
      );
      const data = await responds.json();
      setJokes(data.value);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Input value={value} onChange={setValue} fetchData={fetchData} />
      <Tinder jokes={jokes} />
    </Container>
  );
}
