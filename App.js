import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import "@expo/metro-runtime";
import { styles } from "./styles";
import { useState } from "react";
// import { FlatList } from "react-native-web";

const DATA = [
  { id: 1, title: "title 1", description: "description 1" },
  { id: 2, title: "title 2", description: "description 2" },
  { id: 3, title: "title 3", description: "description 3" },
  { id: 4, title: "title 4", description: "description 4" },
];

const Item = ({ title, description }) => (
  <View>
    <Text>{title}</Text>
    <Text>{description}</Text>
  </View>
);

export default function App() {
  const [activeButton, setActiveButton] = useState(1);

  const buttons = [
    { id: 1, title: "All" },
    { id: 2, title: "Active" },
    { id: 3, title: "Done" },
  ];

  const handlePress = (id) => {
    setActiveButton(id);
  };
  return (
    <View style={styles.container}>
      {/* //app bar */}
      <View style={styles.titleBg}>
        <Text style={styles.title}>ToDo App</Text>
      </View>
      {/* //body */}
      <View style={styles.body}>
        {/* inputs */}
        <TextInput style={styles.input} placeholder="Title ..." />
        <TextInput style={styles.input} placeholder="Description ..." />
        {/* buttons */}
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        {/* divider line */}
        <View style={styles.divider}></View>
        {/* filter buttons container */}
        <View style={styles.filterContainer}>
          {buttons.map((btn) => (
            <TouchableOpacity
              key={btn.id}
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
        {/* data from list */}
        <FlatList
          style={styles.todosContainer}
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} description={item.description} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
