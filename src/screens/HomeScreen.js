import React, { Component } from "react";
import { Text, View, Button } from "react-native";

import BoardList from "../components/board/BoardList";

let board = [
  {
    title: "샘플 게시글1",
    content: "샘플 게시글 content1",
    key: "1"
  },
  {
    title: "샘플 게시글2",
    content: "샘플 게시글 content2",
    key: "2"
  }
];

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 25 }}>홈</Text>

        <View style={{ marginBottom: 30 }}>
          <Button title="글 작성" />
        </View>

        <View
          style={{
            width: "100%",
            flex: 1,
            borderTopWidth: 1
          }}
        >
          <BoardList board={board} />
        </View>
      </View>
    );
  }
}
