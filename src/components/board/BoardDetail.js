import React, { Component } from "react";
import { Text, View } from "react-native";
export default class BoardDetail extends Component {
  static defaultProps = {
    title: "",
    content: ""
  };
  render() {
    return (
      <View>
        <View>
          {/*제목*/}
          <Text>{this.props.title}</Text>
        </View>
        <View>
          {/*내용*/}
          <Text>{this.props.content}</Text>
        </View>
      </View>
    );
  }
}
