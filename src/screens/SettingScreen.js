import React, { Component } from "react";
import { Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "환경설정",
      tabBarIcon: <Ionicons name="md-settings" size={20} color="#ff6666" />
    };
  };
  render() {
    return (
      <View>
        <Text> SettingScreen </Text>
      </View>
    );
  }
}
