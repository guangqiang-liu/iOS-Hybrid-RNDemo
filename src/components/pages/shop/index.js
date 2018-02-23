/**
 * Created by guangqiang on 2018/2/23.
 */
import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import {Router, Scene, Actions} from 'react-native-router-flux'
import ShopApp1 from './Shop1'
import ShopApp2 from './Shop2'
import ShopApp3 from './Shop3'
import store from '../../../store'

const scenes = Actions.create(
    <Scene key='shop'>
      <Scene key='shopApp1' title="ShopApp1" initial={true} component={ShopApp1}/>
      <Scene key="shopApp2" title="ShopApp2" component={ShopApp2}/>
      <Scene key="shopApp3" title="ShopApp3" component={ShopApp3}/>
    </Scene>
)

class ShopCom extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <Router scenes={scenes}/>
        </View>
    )
  }
}

const ShopApp = () => {
  return (
      <Provider store={store}>
        <ShopCom/>
      </Provider>
  )
}

export default ShopApp