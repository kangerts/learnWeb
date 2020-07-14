/**
 * react生命周期--更新期
 */
import React, { Component } from 'react'

class Child extends Component {
    // ---------------------第一阶段：挂载期-----------------------------
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

    // 自定义JSON转字符串方法
    jsonToString(jsonObj) {
        return JSON.stringify(jsonObj)
    }

    // 组件将要挂在（挂在前）
    UNSAFE_componentWillMount() {
        console.log('1.2 componentWillMount组件将要挂在 在挂载前需要执行的代码可写这里');
    }

    // 组件挂载后
    componentDidMount() {
        console.log('1.4 componentDidMount组件挂载后 在挂载后要执行的代码')
        // 这里往往用于异步数据请求
    }
    // ---------------------第一阶段：挂载期-----------------------------

    // ---------------------第二阶段：更新期-----------------------------
    UNSAFE_componentWillReceiveProps() {
        console.log('2.1 componentWillReceiveProps在接收props属性之前')
    }

    // 修改前判断新旧值是否一致，不一致再修改，减少不必要的render渲染，优化更新性能
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2.2 shouldComponentUpdate 是否更新组件')

        console.log('state旧值：', this.state)
        console.log('state新值：', nextState)

        console.log('props旧值：', this.props)
        console.log('props新值：', nextProps)

        // 如果新旧值相同则不需要更改
        return (this.jsonToString(this.state) !== this.jsonToString(nextState) || this.jsonToString(this.props) !== this.jsonToString(nextProps))
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('2.3 componentWillUpdate 更新前执行的代码')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('2.5 componentDidUpdate 更新后执行的代码')
    }
    
    
    
    
    
    // ---------------------第二阶段：更新期-----------------------------

    handleClik() {
        this.setState({
            num: 20
        })
    }

    render() {
        console.log('1.3/2.4 render渲染 渲染标签到页面，并填充数据到标签')
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClik.bind(this)}>点击我</button>
                <p>{this.props.fatherNum}</p>
            </div>
        )
    }
}

export default class App14 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fatherNum: 20
        }
    }

    componentDidMount() {
        // 定时修改数据
        setTimeout(() => {
            this.setState({ fatherNum: 20})
        }, 2000)
    }
    

    render() {
        return (
            <div>
                <Child fatherNum={this.state.fatherNum} />
            </div>
        )
    }
}