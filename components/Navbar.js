import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>My snakes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 90,
    paddingTop: 35,
    backgroundColor: "skyblue",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
