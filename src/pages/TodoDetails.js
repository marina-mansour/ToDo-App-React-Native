import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../shared/styles";

const TodoDetails = ({ route }) => {
  const navigation = useNavigation();
  const { todo } = useRoute().params;
  //   console.log(route.params);
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 4,
          width: "90%",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{todo.title}</Text>
        <Text style={{ fontSize: 18 }}>{todo.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.filterBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          style={{ ...styles.filterText, fontSize: 18, fontWeight: "bold" }}
        >
          Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoDetails;
