import React, { Component } from 'react'

// 双向数据绑定
export default class App5 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            val: '初始值'
        }
    }

    // 因为箭头函数本身没有this指向，所以内部调用this会就近选择（此处选择class的this）
    // handleChange = (event) => {
    //     this.setState({ val: event.target.value })
    // }

    // 因为普通函数存在this指向的问题，所以需要为其绑定正确的this需要用到bind
    handleChange(event) {
        this.setState({ val: event.target.value })
    }

    render() {
        return (
            <div>
                {/* 箭头函数需要显式传递事件对象 */}
                <input type="text" value={this.state.val} onChange={(e) => this.handleChange(e)} />
                {/* bind传值，事件对象是隐式传递 */}
                <input type="text" value={this.state.val} onChange={this.handleChange.bind(this)} />
                <p>{this.state.val}</p>
            </div>
        )
    }
}
