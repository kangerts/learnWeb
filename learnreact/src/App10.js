/**
 * 多级传递props属性值
 */
import React, { Component } from 'react'

// 数据多级传递（props）
class ChildChild extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                <ChildChild title={this.props.title} />
            </div>
        )
    }
}

export default class App10 extends Component {
    render() {
        return (
            <div>
                <Child title="标题" />
            </div>
        )
    }
}
