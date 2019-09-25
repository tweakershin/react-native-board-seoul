import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import BoardListItem from "./BoardListItem";
export default class BoardList extends Component {
  static defaultProps = {
    board: [
      {
        name: "아이템이 없습니다",
        content: "아이템이 없습니다.",
        key: "-1"
      }
    ]
  };
  _renderBoard = ({ item, index, seperators }) => {
    return <BoardListItem {...item} />;
  };

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.props.board}
          renderItem={this._renderBoard.bind(this)}
          ItemSeparatorComponent={({ highlighted, leadingItem }) => {
            return <View style={{ borderBottomWidth: 1 }} />;
          }}
        />
      </ScrollView>
    );
  }
}
