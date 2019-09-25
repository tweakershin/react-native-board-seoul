import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class BoardListItem extends Component {
  static defaultProps = {
    item: {
      name: "default title",
      content: "default content.",
      key: "-1"
    }
  };
  render() {
    return (
      <TouchableOpacity style={{ height: 20, padding: 5 }}>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
