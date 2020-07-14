/**
 * react生命周期--挂载期
 */
import React, { Component } from 'react'

export default class App13 extends Component {

    constructor(props) {
        // 调用父类构造函数并传递props起作用
        super(props)
        
        // 定义组件初始状态数据
        this.state = {
            num: 20
        }

        // 床底this到函数中
        this.handleClik = this.handleClik.bind(this)

        console.log('1.1 constructor构造函数执行 初始化组件')
    }
    
    // 组件将要挂在（挂在前）
    UNSAFE_componentWillMount() {
        console.log('1.2 componentWillMount组件将要挂在 在挂载前需要执行的代码可写这里');
    }

    componentDidMount() {
        console.log('1.4 componentDidMount组件挂载后 在挂载后要执行的代码')
        // 这里往往用于异步数据请求
    }
    
    

    handleClik() {
        console.log('点击事件')
    }

    render() {
        console.log('1.3 render渲染 渲染标签到页面，并填充数据到标签')
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClik.bind(this)}>点击我</button>
            </div>
        )
    }
}
