import React, { Component } from "react";
import { Text, View } from "react-native";

import BoardList from "../components/board/BoardList";

let board = [
  {
    name: "샘플 게시글1",
    content: "샘플 게시글1 내용",
    key: "1"
  },
  {
    name: "샘플 게시글2",
    content: "샘플 게시글2 내용",
    key: "2"
  }
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text> 홈스크린! </Text>
        <BoardList board={board} />
      </View>
    );
  }
}
