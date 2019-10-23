import React, { Component } from "react";
import { View } from "react-native";

import Root from "./Root.js";

export default class BasicApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Root />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
