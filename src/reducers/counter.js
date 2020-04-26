
// 使用redux-immutable 
// 操作二：修改state 改为immutable的对象产物
import { fromJS} from 'immutable'

const initState = fromJS( {
    count: 100
})


export default ( state = initState, action) => {
    console.log(initState.toJS()) //initState永远不会改变
    switch (action.type) {
       case 'INCREMENT':
        // 使用redux-immutable
        //  操作四：修改获取数值的方式
           return state.updateIn(['count'], v => v + 1)
        case 'DECREMENT':
            return state.updateIn(['count'], v => v - 1)
        default:
            return state
    }
}