import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddSnakes({ submitHandler }) {
  const [values, setValues] = useState("");

  const changeHandler = (val) => {
    setValues(val);
  };

  return (
    <View>
      <TextInput
        placeholder='Add snakes'
        onChangeText={changeHandler}
        style={styles.input}
      />
      <Button
        onPress={() => submitHandler(values)}
        title='Add snakes'
        color='skyblue'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
  },
});
