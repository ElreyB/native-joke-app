import React, { useState } from "react";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import SwipeCards from "react-native-swipe-cards";

const Contanier = styled.View`
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #ea394b;
  background-color: #04b1ff;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;
`;

function Card({ joke }) {
  return (
    <Contanier>
      <Text>{joke}</Text>
    </Contanier>
  );
}

function NoMoreCards() {
  return (
    <Contanier>
      <Text>"No more jokes!"</Text>
    </Contanier>
  );
}

function handleNope() {
  console.log("I don't like this joke!");
}

function handleYup() {
  console.log("I like this joke!");
}

export default function Tinder({ jokes }) {
  return (
    <SwipeCards
      cards={jokes}
      renderCard={(jokeObj) => <Card joke={jokeObj.joke} />}
      renderNoMoreCards={() => <NoMoreCards />}
      handleYup={handleYup}
      handleNope={handleNope}
      style={{ flex: 1 }}
    />
  );
}
