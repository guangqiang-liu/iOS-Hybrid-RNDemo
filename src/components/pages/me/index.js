/**
 * Created by guangqiang on 2018/2/22.
 */
import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Provider} from 'react-redux'
import {Router, Scene, Actions, Stack} from 'react-native-router-flux'
import store from '../../../store'

import Placeholder from '../placeholder'
import MeApp1 from './MeApp'
import MeApp2 from './MeApp2'
import MeApp3 from './MeApp3'

import OrderApp1 from '../order/Order1'
import OrderApp2 from '../order/Order2'
import OrderApp3 from '../order/Order3'

import ShopApp1 from '../shop/Shop1'
import ShopApp2 from '../shop/Shop2'
import ShopApp3 from '../shop/Shop3'

const scenes = Actions.create(

    <Scene key='root' hideNavBar={true}>

      <Scene key='placeholder' initial component={Placeholder}/>

      <Stack key='me'>
        <Scene key='meApp1' title="MeApp1" component={MeApp1}/>
        <Scene key="meApp2" title="MeApp2" component={MeApp2}/>
        <Scene key="meApp3" title="MeApp3" component={MeApp3}/>
      </Stack>

      <Stack key='order'>
        <Scene key='orderApp1' title="OrderApp1" component={OrderApp1}/>
        <Scene key="orderApp2" title="OrderApp2" component={OrderApp2}/>
        <Scene key="orderApp3" title="OrderApp3" component={OrderApp3}/>
      </Stack>

      <Stack key='shop'>
        <Scene key='shopApp1' title="ShopApp1" component={ShopApp1}/>
        <Scene key="shopApp2" title="ShopApp2" component={ShopApp2}/>
        <Scene key="shopApp3" title="ShopApp3" component={ShopApp3}/>
      </Stack>

    </Scene>
)

class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Router scenes={scenes}/>
        </View>
    )
  }
}

const RootApp = () => {
  return (
      <Provider store={store}>
        <App/>
      </Provider>
  )
}

export default RootApp