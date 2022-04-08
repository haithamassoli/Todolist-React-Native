import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    // setTodo((todos)=>[...todos, input]);
    setTodo([...todo, input]);
    console.log(todo);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={require("./assets/favicon.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={{ color: "#fff" }}>Haitham</Text>
      </View>

      <View style={styles.todoBody}>
        <TextInput
          style={styles.inputTodo}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Todo..."
        />
        <View style={styles.todoButton}>
          <Button title="Add" color={"#444"} onPress={() => handleSubmit()} />
        </View>
      </View>
      <View style={{ height: "70%", marginTop: 5 }}>
        <ScrollView>
          {todo &&
            todo.map((todo, index) => (
              <View style={styles.todoList}>
                <Text style={{ color: "#fff" }} key={index}>
                  {todo}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
      {/* <Text style={{ color: "#eee", fontSize: 50 }}>Hello Haitham!</Text> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    paddingHorizontal: 20,
    marginTop: 25,
  },
  navbar: {
    height: 50,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 25,
  },
  todoBody: {
    height: 50,
    backgroundColor: "#333",
    marginTop: 25,
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputTodo: {
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    backgroundColor: "#eee",
    borderColor: "#333",
    borderRadius: 10,
    width: "70%",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderWidth: 1,
    flexDirection: "row",
  },
  todoButton: {
    borderRadius: 10,
    width: "20%",
  },
  todoList: {
    backgroundColor: "#666",
    // alignSelf: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "#111",
    marginBottom: 5,
    borderRadius: 10,
  },
});
