/**
 * 子级组件向父级组件传递值
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 多级组件传值（context）
class ChildChild extends Component {

    // 3.固定写法（使用传递的属性）
    static contextTypes = {
        title: PropTypes.string
    }

    render() {
        return (
            <div>
                {/* 4.取值 */}
                {this.context.title}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <ChildChild />
            </div>
        )
    }
}

export default class App11 extends Component {

    // 2.在父组件中书写属性数据类型
    static childContextTypes = {
        title: PropTypes.string
    }

    // 1.固定写法（把要传递的子孙组件属性放置在此）
    getChildContext() {
        return {
            title: '标题'
        }
    }

    render() {
        return (
            <div>
                <Child title="标题" />
            </div>
        )
    }
}
