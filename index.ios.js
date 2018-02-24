import { AppRegistry } from 'react-native'
import React, {Component} from 'react'

import MeApp from './src/components/pages/me'
AppRegistry.registerComponent('MeApp', () => MeApp)

import OrderApp from './src/components/pages/order'
AppRegistry.registerComponent('OrderApp', () => OrderApp)

import ShopApp from './src/components/pages/shop'
AppRegistry.registerComponent('ShopApp', () => ShopApp)