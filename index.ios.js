import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import App from './src/containers/App'
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