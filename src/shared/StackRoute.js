import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import TodoDetails from "../pages/TodoDetails";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoute = ({ todos, setTodos }) => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={() => <Home todos={todos} setTodos={setTodos} />}
        options={{ title: "Todo App" }}
      />
      <Screen
        name="todo-details"
        component={TodoDetails}
        options={{ title: "Todo Details" }}
      />
    </Navigator>
  );
};

export default StackRoute;
