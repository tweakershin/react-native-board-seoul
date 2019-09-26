import React, { Component } from "react";
import { Text, View } from "react-native";
// 삭제
// import BoardCreate from "../components/board/BoradCreate";

// 추가
import BoardCreateContainer from "../containers/board/BoardCreateContainer";

export default class BoardCreateScreen extends Component {
  constructor(props) {
    super(props);

    // 삭제
    // const createFunc = this.props.navigation.getParam("createFunc");
    // this.createFunc = createFunc;
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 25 }}> 글 작성 </Text>
        {/* 삭제
        <BoardCreate createFunc={this.createFunc} {...this.props} />
        */}
        <BoardCreateContainer />
      </View>
    );
  }
}
