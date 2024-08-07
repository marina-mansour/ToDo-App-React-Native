import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // paddingVertical: 40,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-start",
  },
  body: {
    marginHorizontal: 12,
  },
  titleBg: {
    backgroundColor: "#DDDDDD",
    width: "100%",
    paddingVertical: 20,
    marginBottom: 36,
  },
  title: {
    paddingTop: 40,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  submitBtn: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
  },
  divider: {
    height: 1,
    backgroundColor: "black",
    marginVertical: 30,
  },
  dividerLine: {
    height: 1,
    width: "90%",
    backgroundColor: "#aeaeae",
    marginVertical: 15,
  },
  filterContainer: {
    flexDirection: "row",
    // width: "90%",
    justifyContent: "space-around",
  },
  filterBtn: {
    width: "30%",
    backgroundColor: "#ffffff",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  filterText: {
    color: "black",
    fontSize: 15,
  },
  activeFilterBtn: {
    width: "30%",
    backgroundColor: "black",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  activeFilterText: {
    color: "white",
    fontSize: 15,
  },
  todosContainer: {
    marginTop: 10,
  },
  doneTodo: {
    textDecorationLine: "line-through",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     // paddingVertical: 40,
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   body: {
//     marginHorizontal: 12,
//   },
//   titleBg: {
//     backgroundColor: "#DDDDDD",
//     width: "100%",
//     paddingVertical: 20,
//     marginBottom: 36,
//   },
//   title: {
//     paddingTop: 40,
//     alignSelf: "center",
//     fontSize: 30,
//     fontWeight: "bold",
//   },
//   input: {
//     height: 40,
//     marginVertical: 12,
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#DDDDDD",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontWeight: "bold",
//     fontSize: 20,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: "black",
//     marginVertical: 30,
//   },
// });
