import React from "react";
import { Text, View } from "react-native";
import { styles } from "../shared/styles";

const CompletedTasks = ({ todos, setTodos }) => {
  const completed = todos.filter((todo) => todo.isCompleted);

  return (
    <View style={styles.container}>
      {/* {todos.length == 0? <Text>No Tasks Done yet</Text>} */}

      {completed.length == 0 ? (
        <Text>No Tasks Done yet</Text>
      ) : (
        <>
          {completed.map((todo) => (
            <View
              style={{
                marginVertical: 4,
                width: "90%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                {todo.title}
              </Text>
              <Text style={{ fontSize: 18 }}>{todo.description}</Text>
            </View>
          ))}
        </>
      )}
    </View>
  );
};

export default CompletedTasks;

// <>
//   {item.isCompleted && (

//   )}
// </>
