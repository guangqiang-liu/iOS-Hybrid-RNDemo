/**
 * Created by guangqiang on 2018/2/23.
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeModules
} from 'react-native'

import {Actions} from 'react-native-router-flux'

let RNModules = NativeModules.RTShopModules

export default class Shop3App extends Component {

  componentDidMount() {
    RNModules.RNChangeTitle('店铺模块三')
  }

  componentWillUnmount() {
    RNModules.RNChangeTitle('店铺模块二')
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to Shop3App!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <Text style={styles.instructions}>
            第一个页面
          </Text>
          <TouchableOpacity
              onPress={() => Actions.pop()}
          >
            <Text>点击返回上一级页面</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})