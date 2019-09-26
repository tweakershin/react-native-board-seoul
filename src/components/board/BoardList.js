import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";

import { withNavigation } from "react-navigation";
import BoardListItem from "./BoardListItem";

export default class BoardList extends Component {
  static defaultProps = {
    board: [
      {
        title: "게시글이 없습니다.",
        content: "게시글이 없습니다.",
        key: "0"
      }
    ]
  };

  _renderItem({ item, index, seperator }) {
    return (
      <BoardListItem
        {...item}
        onPress={() => {
          this.props.navigation.push("Detail", { item: item });
        }}
      />
    );
  }

  render() {
    // console.log(this.props.navigation);
    return (
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={this.props.board}
          renderItem={this._renderItem}
          ItemSeparatorComponent={obj => {
            return <View style={{ borderBottomWidth: 1 }} />;
          }}
        />
      </ScrollView>
    );
  }
}
