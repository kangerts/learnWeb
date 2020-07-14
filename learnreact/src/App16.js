/**
 * 不受控组件
 */
import React, { Component } from 'react'

export default class App16 extends Component {

    handleClik() {
        // 需要用户触发某个函数才进行数据校验等
        // 不推荐refs操作
        let username = this.refs.username
        console.log(username.value)
    }

    render() {
        return (
            <div>
                用户名：<input type="text" ref="username" /><br></br>
                密码：<input type="text" ref="password" /><br></br>
                <input type="button" value="登录" onClick={this.handleClik.bind(this)} /><br></br>
            </div>
        )
    }
}
