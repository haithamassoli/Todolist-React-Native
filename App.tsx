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
  Modal,
  Pressable,
  FlatList,
} from "react-native";

export default function App() {
  const [todo, setTodo] = useState<{ id: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setTodo((todos) => [
      ...todos,
      {
        text: input,
        id: Math.random().toString(),
      },
    ]);
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
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
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
              <Button
                title="Add"
                color={"#444"}
                onPress={() => handleSubmit()}
              />
            </View>
          </View>
          <View style={{ height: "70%", marginTop: 5 }}>
            <FlatList
              data={todo}
              renderItem={({ item }) => (
                <View style={styles.todoList}>
                  <Text style={{ color: "#fff" }}>{item.text}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Add Todo</Text>
      </Pressable>
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
  modalContainer: {
    flex: 1,
    backgroundColor: "#333",
    paddingHorizontal: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#666",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
