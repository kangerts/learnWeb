/**
 * 子组件修改父组件属性数据
 */
import React, { Component } from 'react'

class Child extends Component {

    handleCLick(num) {
        // 通过this.props获取标签属性传递的方法
        this.props.fatherChange(num)
    }

    render() {
        return (
            <div>
                <button onClick={this.handleCLick.bind(this, 10)}>点击</button><br />
                {this.props.children}
             </div>
         )
     }
}
 
export default class App12 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            num: 20
        }
    }

    // 父组件提供给子组件修改父组件数据的方法（自定义的）
    fatherChange(num) {
        this.setState({ num: num })
    }

    render() {
        return (
            <div>
                {/* 将此方法通过标签属性传递 */}
                <Child fatherChange={this.fatherChange.bind(this)}>{this.state.num}</Child>
            </div>
        )
    }
}