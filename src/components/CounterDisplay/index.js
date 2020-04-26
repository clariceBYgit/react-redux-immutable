import React, { Component } from 'react'




import { connect } from 'react-redux'




class CounterDisplay extends Component {
    render() {
        // console.log(this.props)
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
         // 使用redux-immutable
        //  操作三：修改获取数值的方式
        count: state.getIn(['counter','count'])
    }
}


export default  connect(mapStateToProps)(CounterDisplay)