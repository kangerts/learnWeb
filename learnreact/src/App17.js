/**
 * 受控组件
 */
import React, { Component } from 'react'

export default class App16 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            usernameVal: ''
        }
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({ usernameVal: e.target.value})
    }

    render() {
        return (
            <div>
                {/* 值受组件的监视，可显示最新状态 */}
                用户名：<input type="text" value={this.state.usernameVal} onChange={this.handleChange.bind(this)} /><br></br>
                密码：<input type="text" /><br></br>
                <input type="button" value="登录" /><br></br>
            </div>
        )
    }
}
