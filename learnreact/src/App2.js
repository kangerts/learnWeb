import React from 'react'
import "./assets/css/style.css"
import hh from './assets/images/hh.jpg'

export default class App2 extends React.Component {
    render() {
        return (
            <div>
                <p style={{ color: 'red', fontSize: '18px' }}>hhhhh</p>
                <p className="box">我正在学习react</p>
                <img src={hh} alt="aa" width="50px" />
                <label htmlFor="userName">
                    用户名：<input id="userName" type="text" />
                </label>
            </div>
        )
    }
}