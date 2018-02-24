import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
// 必须为根组件
import App from './src/components/pages/me'
import {moduleName} from './src/constants'

class RootComponent extends Component {
  render() {
    const {componentName, args} = this.props
    moduleName.MODULE_NAME = componentName
    moduleName.ARGS = args
    return (
        <App/>
    )
  }
}

AppRegistry.registerComponent('iOSRN', () => RootComponent)