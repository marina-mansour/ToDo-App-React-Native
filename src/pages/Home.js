import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../shared/styles";
import Todos from "../components/Todos";

const Home = ({ todos, setTodos }) => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: "title 1",
  //     description: "description 1",
  //     isCompleted: false,
  //   },
  // ]);

  const [activeButton, setActiveButton] = useState(1);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const buttons = [
    { id: 1, title: "All" },
    { id: 2, title: "Active" },
    { id: 3, title: "Done" },
  ];

  const handlePress = (id) => {
    setActiveButton(id);
  };

  const addTodo = () => {
    if (title && description) {
      const newTodo = {
        id: Date.now(),
        title: title,
        description: description,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("");
    }
  };

  useEffect(() => {
    // console.log(todos);
  }, []);
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <SafeAreaView style={styles.container}>
      {/* title */}
      <Text
        style={{ fontSize: 25, textTransform: "uppercase", fontWeight: "bold" }}
      >
        todo app
      </Text>
      {/* inputs */}
      <TextInput
        style={styles.input}
        value={title}
        placeholder="Title ..."
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        value={description}
        placeholder="Description ..."
        onChangeText={(text) => setDescription(text)}
      />
      {/* buttons */}
      <TouchableOpacity
        style={styles.submitBtn}
        activeOpacity={0.5}
        onPress={addTodo}
      >
        <Text style={styles.text}>Add</Text>
      </TouchableOpacity>
      {/* divider line */}
      <View style={styles.dividerLine}></View>
      {/* divider line */}
      <View style={styles.divider}></View>
      {/* filter buttons container */}
      <View style={styles.filterContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn.id}
            activeOpacity={0.5}
            style={
              btn.id === activeButton
                ? styles.activeFilterBtn
                : styles.filterBtn
            }
            onPress={() => handlePress(btn.id)}
          >
            <Text
              style={
                btn.id === activeButton
                  ? styles.activeFilterText
                  : styles.filterText
              }
            >
              {btn.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* todos Container */}
      {todos.length == 0 ? (
        <View style={{ ...styles.container, marginTop: 40 }}>
          <Text>No Todos to Show</Text>
        </View>
      ) : (
        <ScrollView style={styles.todosContainer}>
          <Todos todos={todos} setTodos={setTodos} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
