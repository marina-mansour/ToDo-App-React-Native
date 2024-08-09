import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "../shared/styles";

const TodoItem = ({ todos, setTodos }) => {
  // **State for managing modal visibility**
  const [modalVisible, setModalVisible] = useState(false);

  // **State for storing the ID of the todo to be deleted**
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const unfinished = todos.filter((todo) => todo.isCompleted === false);
  const navigation = useNavigation();
  const Item = ({ title, description, id, onDelete, onDone }) => (
    <View
      style={{
        marginVertical: 4,
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text>
        <Text style={{ fontSize: 18 }}>{description}</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Icon
            name="delete"
            size={30}
            color="darkred"
            style={{ margin: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDone(id)}>
          <Icon name="check" size={30} color="green" style={{ margin: 10 }} />
        </TouchableOpacity>
      </View>
    </View>
  );

  // **Handler to open the delete confirmation modal**
  const handleDelete = (id) => {
    setSelectedTodoId(id);
    setModalVisible(true);
  };

  // **Handler to confirm deletion**
  const confirmDelete = () => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== selectedTodoId)
    );
    setModalVisible(false);
  };

  const handleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  };

  return (
    <>
      {/* **Modal for confirming deletion** */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this ToDo?
            </Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.filterBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.activeFilterBtn}
                onPress={confirmDelete}
              >
                <Text style={styles.activeFilterText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <FlatList
        data={unfinished}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("todo-details", { todo: item })}
            activeOpacity={0.5}
          >
            <Item
              title={item.title}
              description={item.description}
              id={item.id}
              onDelete={handleDelete}
              onDone={handleDone}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default TodoItem;
