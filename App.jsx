import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox, Text, View } from "react-native";
import HomeScreen from "./components/HomeScreen";

// Hide Error FlatList using inside ScrollView
LogBox.ignoreLogs(["VirtualizedLists"]);

export default function App() {
  return <HomeScreen />;
}
