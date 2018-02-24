/**
 * Created by guangqiang on 2018/2/24.
 */
import React, { Component } from 'react'
import {Text} from 'react-native'
import MeApp1 from '../me/MeApp'
import OrderApp1 from '../order/Order1'
import ShopApp1 from '../shop/Shop1'
import {moduleName} from '../../../constants'
export default class Placeholder extends Component {

  render() {
    let componentName = moduleName.MODULE_NAME
    let args = moduleName.ARGS
    if (componentName === 'MeApp1') {
      return (
          <MeApp1 args={args}/>
      )
    } else if (componentName === 'OrderApp1') {
      return (
          <OrderApp1 args={args}/>
      )
    } else if (componentName === 'ShopApp1') {
      return (
          <ShopApp1 args={args}/>
      )
    } else {
      return (
          <Text>没有找到对应的组件</Text>
      )
    }
  }
}