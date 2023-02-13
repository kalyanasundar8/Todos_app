import React, { useState } from "react";
import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddSnakes from "./components/AddSnakes";
import Navbar from "./components/Navbar";
import SnakeList from "./components/SnakeList";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "Death adder", key: 1 },
    { name: "Python", key: 2 },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (name) => {
    if (name.length > 3) {
      setTodos((prevTodos) => {
        return [{ name: name, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "The name must be atleast 3 characters", [
        { text: "OK", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Keyboard dissmissed");
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Navbar />
        <View style={styles.content}>
          {/* form */}
          <AddSnakes submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <SnakeList item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 40,
  },
});
