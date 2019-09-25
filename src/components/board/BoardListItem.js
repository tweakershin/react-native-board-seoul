import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default class BoardListItem extends Component {
  static defaultProps = {
    name: "default title",
    content: "default content.",
    key: "-1"
  };
  render() {
    return (
      <TouchableOpacity style={{ height: 40, padding: 5 }}>
        <Text style={{ fontSize: 30 }}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
