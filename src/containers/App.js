/**
 * Created by guangqiang on 2018/2/22.
 */
import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Provider, connect} from 'react-redux'
import {Scene, Router, Actions, Reducer, ActionConst, Modal, Stack, Lightbox} from "react-native-router-flux"
import store from '../store/index'
import type from '../constants/ActionType'
import Action from '../actions/index'

import Station from '../components/pages/station'
import Loading from '../utils/loading/LoadingHud'

import MeApp1 from '../components/pages/me/MeApp'
import MeApp2 from '../components/pages/me/MeApp2'
import MeApp3 from '../components/pages/me/MeApp3'

import OrderApp1 from '../components/pages/order/Order1'
import OrderApp2 from '../components/pages/order/Order2'
import OrderApp3 from '../components/pages/order/Order3'

import ShopApp1 from '../components/pages/shop/Shop1'
import ShopApp2 from '../components/pages/shop/Shop2'
import ShopApp3 from '../components/pages/shop/Shop3'

const scenes = Actions.create(
    <Scene key="root">
      <Modal key="modal" hideNavBar>
        <Lightbox key="lightbox" hideNavBar={true}>

          <Stack key="init" hideNavBar={true}>

            <Scene key='station' initial component={Station}/>

            <Scene key='meApp1' title="MeApp1" component={MeApp1}/>
            <Scene key="meApp2" title="MeApp2" component={MeApp2}/>
            <Scene key="meApp3" title="MeApp3" component={MeApp3}/>

            <Scene key='orderApp1' title="OrderApp1" component={OrderApp1}/>
            <Scene key="orderApp2" title="OrderApp2" component={OrderApp2}/>
            <Scene key="orderApp3" title="OrderApp3" component={OrderApp3}/>

            <Scene key='shopApp1' title="ShopApp1" component={ShopApp1}/>
            <Scene key="shopApp2" title="ShopApp2" component={connect(
                state => state.shop.shopList,
                Action.dispatch('shop')
            )(ShopApp2)}/>
            <Scene key="shopApp3" title="ShopApp3" component={ShopApp3}/>
          </Stack>

          <Scene key='loading' component={connect(
              state => state.common.loading
          )(Loading)}/>
        </Lightbox>
      </Modal>
    </Scene>
)

const reducerCreate = params => {
  const defaultReducer = new Reducer(params)
  return (state, action) => {
    // action.type !== type.REACT_NATIVE_ROUTER_FLUX_SET_PARAMS ? dispatch(state)(action) : null
    return defaultReducer(state, action)
  }
}

const getSceneStyle = () => ({
  backgroundColor: "white",
  shadowOpacity: 1,
  shadowRadius: 3,
})

class App extends Component {
  render() {
    return (
        <View style={{flex: 1}}>
          <Router
              scenes={scenes}
              createReducer={reducerCreate}
              tintColor='white'
              getSceneStyle={getSceneStyle}
          />
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