// import { StatusBar } from "expo-status-bar";
import "@expo/metro-runtime";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackRoute from "./src/shared/StackRoute";
import CompletedTasks from "./src/pages/CompletedTasks";

import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";

const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "title 1",
      description: "description 1",
      isCompleted: false,
    },
  ]);
  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Main") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "completed-tasks") {
                iconName = focused
                  ? "checkmark-circle"
                  : "checkmark-circle-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarStyle: {
              position: "absolute",
              width: "90%",
              bottom: 20,
              left: "5%",
              borderRadius: 20,
              shadowColor: "gray",
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Screen
            name="Main"
            component={() => <StackRoute todos={todos} setTodos={setTodos} />}
            // initialParams={{ todos, setTodos }}
            options={{ title: "Home", headerShown: false }}
          />
          <Screen
            name="completed-tasks"
            component={() => (
              <CompletedTasks todos={todos} setTodos={setTodos} />
            )}
            options={{ title: "Completed Tasks" }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
