/**
 * 验证props属性数据类型
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {

    // 属性类型校验（固定写法）
    static propTypes = {
        // 要验证的属性名 PropTypes.期望的属性数据类型
        title: PropTypes.string
    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default class App9 extends Component {
    render() {
        return (
            <div>
                <Header title="kangert" />
                <Header title={11} />
            </div>
        )
    }
}
