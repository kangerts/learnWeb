/**
 * react路由的使用
 */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// hash模式路由
import { HashRouter, Route } from 'react-router-dom'
// history模式路由
// import { BrowserRouter, Route, Link} from 'react-router-dom'
import Index from './Index'
import List from './List'

export default class App18 extends Component {
    render() {
        return (
            // 普通路由
            <div>
                <ul>
                    <li><a href="#/index">首页</a></li>
                    <li><a href="#/list">列表</a></li>
                </ul>
            </div>
        )
    }
}

// 定义路由（普通路由）
let routes = <HashRouter>
    <Route path="/" component={App18} />
    <Route path="/index" component={Index} />
    <Route path="/list" component={List} />
</HashRouter>

ReactDOM.render(routes, document.getElementById('root'))
