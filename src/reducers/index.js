// 使用redux-immutable   
// 操作一：将其combineReducers原来的引入进行修改  改为从redux-immutable中引入
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'

import counter from './counter'


export default combineReducers({

    counter
})