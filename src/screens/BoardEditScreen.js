import React, { Component } from "react";
import { Text, View, TextInput } from "react-native";

export default class BoardEditScreen extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam("item");
    this.state = {
      title: item.title,
      content: item.content,
      key: item.key
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>글수정</Text>

        <View style={{ height: 40, borderWidth: 1 }}>
          {/* 제목 */}
          <TextInput value={this.state.title} />
        </View>
        <View style={{ height: 300, borderWidth: 1, marginTop: 20 }}>
          {/* 내용 */}
          <TextInput value={this.state.content} />
        </View>
      </View>
    );
  }
}
