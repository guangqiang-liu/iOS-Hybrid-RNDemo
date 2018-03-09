/**
 * Created by guangqiang on 2017/11/15.
 */
import {AsyncStorage} from 'react-native'
import Storage from 'react-native-storage'
import {sync} from './sync'

let storage = undefined
let defaultExpires = 1000 * 3600 * 24
let size = 1000

const createStorage = () => {

  storage = new Storage({
    size: size,
    storageBackend: AsyncStorage,
    defaultExpires: defaultExpires,
    enableCache: true,
    sync: sync
  })
}

const initStorage = () => {
  if (!storage) {
    createStorage()
  }
}

const _storage = {

  save(key, obj) {
    initStorage()
    storage.save({
      key: key,  // 注意: 请不要在key中使用_下划线符号!
      data: obj,
      expires: defaultExpires
    })
  },

  // 取数据
  load(key, callBack) {
    initStorage()
    storage.load({
      key: key,
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: { // 各种参数
        },
        someFlag: true,
      }
    }).then(ret => {
      callBack && callBack(ret)
      return ret
    }).catch(err => {
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // TODO
          break
        case 'ExpiredError':
          // TODO
          break
      }
    })
  },

  // 获取某个key下的所有id(仅key-id数据)
  getIdsForKey(id, callback) {
    initStorage()
    storage.getIdsForKey(id).then(ids => {
      callback && callback(ids)
    })
  },

  // 获取某个key下的所有数据(仅key-id数据)
  getAllDataForKey(key, callback) {
    initStorage()
    storage.getAllDataForKey(key).then(users => {
      callback && callback(users)
    })
  },

  // !! 清除某个key下的所有数据(仅key-id数据)
  clearMapForKey(key) {
    initStorage()
    storage.clearMapForKey(key)
  },

  // 删除单个数据
  remove(key) {
    initStorage()
    storage.remove({
      key: key
    })
  },

  // !! 清空map，移除所有"key-id"数据（但会保留只有key的数据）
  clearMap() {
    initStorage()
    storage.clearMap()
  }
}

export {_storage as storage}