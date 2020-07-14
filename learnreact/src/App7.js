import React, { Component } from 'react'

// this.props传值

// 子组件
class Header extends Component {

    // 设置属性的默认值（固定写法）
    static defaultProps = {
        bgc: 'pink',
        title: 'kangert'
    }

    render() {
        return (
            <header style={{ width: '100%', height: '40px', lineHeight: '40px', backgroundColor: this.props.bgc}}>
                {/* this.props获取调用这个组件时的标签属性 */}
                {this.props.title}

                {/* 特殊写法，专门获取子组件被调用的时候，写成的双标签中的子元素 */}
                {this.props.children}
            </header>
        )
    }
}

// 父组件
export default class App7 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '首页标题666'
        }
    }
    render() {
        return (
            <div>
                <Header title="首页标题" />
                <Header title="列表页标题" />
                <Header title={this.state.title} bgc="#cff" />
                <Header />
                <Header>ddd</Header>
            </div>
        )
    }
}
