import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'
import { Map, LList, List } from 'immutable'
const state = {
  name:"qx",
  todos:['html', 'css' ,'vue']
}


// ====Map  的使用  用于对象====
const newState = Map(state)
console.log(state, newState.get('todos')) 
// 对任何immutable的对象进行操作都会返回新的immutable的对象
const imNewState = newState.set('name', '签收')
console.log(imNewState.get('name'))  //签收

// ====List  的使用  用于数组====
const list1 = List(['1' ,'2', '3'])
const list2 = list1.push('5')
//list1.get(下标索引)
console.log(list1.get(3), list2.get(3)) //undefined  '5'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
