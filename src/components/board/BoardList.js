import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";

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

  _renderItem({item, index, seperator}){
    return (
      
    )
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <FlatList
          data={this.props.board}
          renderItem={}
        />
      </ScrollView>
    );
  }
}
