/**
 * Created by guangqiang on 2018/2/22.
 */
import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {Provider} from 'react-redux'
import {Router, Scene, Actions} from 'react-native-router-flux'
import MeApp1 from './MeApp'
import MeApp2 from './MeApp2'
import MeApp3 from './MeApp3'
import store from '../../../store'

const scenes = Actions.create(
    <Scene key='me'>
      <Scene key='meApp1' title="MeApp1" initial={true} component={MeApp1}/>
      <Scene key="meApp2" title="MeApp2" component={MeApp2}/>
      <Scene key="meApp3" title="MeApp3" component={MeApp3}/>
    </Scene>
)

class MeCom extends Component {

  render() {
    return (
        <View style={{flex: 1}}>
          <Router scenes={scenes}/>
        </View>
    )
  }
}

const MeApp = () => {
  return (
      <Provider store={store}>
        <MeCom/>
      </Provider>
  )
}

export default MeApp