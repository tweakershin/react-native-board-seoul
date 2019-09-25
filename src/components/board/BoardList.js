import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";

export default class BoardList extends Component {
  static defaultProps = {
    board: [
      {
        name: "아이템이 없습니다",
        key: "0"
      }
    ]
  };
  _renderBoard = () => {};

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.board}
          renderItem={self._renderBoard.bind(this)}
        />
      </ScrollView>
    );
  }
}
