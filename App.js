import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Alert,
} from "react-native";

export default function App() {
  const [toDos, setToDos] = useState([
    { TaskName: "Eating Breakfast", TaskStatus: false },
    { TaskName: "Eating Lunch", TaskStatus: true },
    { TaskName: "Eating Dinner", TaskStatus: true },
  ]);
  const [activeTab, setActiveTab] = useState("All");

  const arrList = toDos.filter((task) => {
    if (activeTab === "All") {
      return true;
    }
    if (activeTab === "Active") {
      return !task.TaskStatus;
    }
    if (activeTab === "Done") {
      return task.TaskStatus;
    }
  });

  const [taskName, setTaskName] = useState({ TaskName: "", TaskStatus: false });

  // var [isDone, setIsDone] = useState(false);

  const handleTaskFromUser = (valueFromUser) => {
    // setTaskName(valueFromUser);
    setTaskName({ TaskName: valueFromUser, TaskStatus: false });
    console.log(taskName);

  };
  const handleAddTask = () => {
    // setToDos((...toDos)=>{
    //   return[{TaskName:taskName,TaskStatus:false},...toDos];
    // })
    setToDos([...toDos, taskName]);
    setTaskName({ TaskName: "", TaskStatus: false })
  };
  const Toggle = (index) => {
    const temp = [...toDos];
    temp[index].TaskStatus = !temp[index].TaskStatus;
    setToDos([...temp]);
  };
  return (
    <View style={{ backgroundColor: "#150e56", flex: 1 }}>
      <View style={styles.container}>
        <Text style={{ color: "#ff5200", fontWeight: "bold", fontSize: 40 }}>
          BABY SHARK
        </Text>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          TODO
          <Text style={{ color: "white", fontWeight: "normal" }}>
            -dododododooooo
          </Text>
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            onChangeText={(text) => handleTaskFromUser(text)}
            placeholder="Enter Your Task"
            value={taskName.TaskName}
            style={{
              color: "#150e56",
              backgroundColor: "white",
              borderColor: "white",
              borderRadius: 50,
              height: "40px",
              marginTop: "20px",
              padding: "10px",
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#ff5200",
              borderRadius: 50,
              width: "40px",
              height: "40px",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              paddingBottom: "10px",
              margin: "20px",
              flexGrow: 0.1,
            }}
            onPress={handleAddTask}
          >
            <Text
              style={{
                color: "#150e56",
                fontWeight: "bold",
                fontSize: 40,
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => setActiveTab("All")}
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 50,
                height: "40px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "20px",
                width: "120px",
              },
              activeTab === "All" ? styles.active : "",
            ]}
          >
            <Text
              style={{
                color: "#150e56",
                fontWeight: "bold",
              }}
            >
              ALL
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Active")}
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 50,
                height: "40px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "20px",
                width: "120px",
              },
              activeTab === "Active" ? styles.active : "",
            ]}
          >
            <Text
              style={{
                color: "#150e56",
                fontWeight: "bold",
              }}
            >
              ACTIVE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab("Done")}
            style={[
              {
                backgroundColor: "#fff",
                borderRadius: 50,
                height: "40px",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginTop: "20px",
                width: "120px",
              },
              activeTab === "Done" ? styles.active : "",
            ]}
          >
            <Text
              style={{
                color: "#150e56",
                fontWeight: "bold",
              }}
            >
              DONE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{ marginTop: "40px", width: "50%", marginHorizontal: "auto" }}
      >

        <FlatList
          data={[...arrList]}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => Toggle(index)}>
              <View
                style={[
                  { flexDirection: "row", justifyContent: "flex-start" },
                  item.TaskStatus ? styles.done : "",
                ]}
              >
                <Feather
                  name="check-square"
                  size={24}
                  color="white"
                  style={item.TaskStatus ? styles.done : ""}
                />
                <Text
                  style={[
                    { color: "white", fontSize: 20 },
                    item.TaskStatus ? styles.done : "",
                  ]}
                >
                  {" "}
                  {item.TaskName}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#150e56",
    alignItems: "center",
    justifyContent: "center",
  },
  done: {
    color: "#ff5200",
    textDecorationLine: "line-through",
  },
  active: {
    backgroundColor: "#ff5200",
  },
});
