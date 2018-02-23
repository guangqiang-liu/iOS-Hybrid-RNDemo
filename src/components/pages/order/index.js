/**
 * Created by guangqiang on 2018/2/23.
 */
import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import {Router, Scene, Actions} from 'react-native-router-flux'

import OrderApp1 from './Order1'
import OrderApp2 from './Order2'
import OrderApp3 from './Order3'
import store from '../../../store'

const scenes = Actions.create(
    <Scene key='order'>
      <Scene key='orderApp1' title="OrderApp1" initial={true} component={OrderApp1}/>
      <Scene key="orderApp2" title="OrderApp2" component={OrderApp2}/>
      <Scene key="orderApp3" title="OrderApp3" component={OrderApp3}/>
    </Scene>
)

class OrderCom extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <Router scenes={scenes}/>
        </View>
    )
  }
}

const OrderApp = () => {
  return (
      <Provider store={store}>
        <OrderCom/>
      </Provider>
  )
}

export default OrderApp