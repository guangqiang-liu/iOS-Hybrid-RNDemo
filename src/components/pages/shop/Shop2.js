/**
 * Created by guangqiang on 2018/2/23.
 */
import React, {Component} from 'react'
import {View, ListView, Image, Text, StyleSheet, NativeModules} from 'react-native'
import {commonStyle} from '../../../constants/GlobalStyles'
import ShowTimeCell from './ListCell'

let RNModules = NativeModules.RTShopModules

export default class ShowTimeList extends Component {

  constructor(props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  }

  componentDidMount() {
    RNModules.RNChangeTitle('店铺模块二')
    this.props.getMovieList()
  }

  componentWillUnmount() {
    RNModules.RNChangeTitle('店铺模块一')
  }

  renderRow(rowData, sectionId, rowId) {
    return (
        <ShowTimeCell key={rowId} rowData={rowData}/>
    )
  }

  render() {
    let dataSource = this.state.dataSource.cloneWithRows(this.props.shopList)
    return (
        <ListView
            style={styles.content}
            renderRow={this.renderRow}
            enableEmptySections
            dataSource={dataSource}
        />
    )
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: commonStyle.white,
    marginTop: 64
  }
})