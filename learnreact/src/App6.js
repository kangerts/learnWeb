import React, { Component } from 'react'
import './App6.css'

// 菜单栏案例
export default class App6 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            num: 1
        }
    }

    handleClik = (num) => {
        this.setState({ num: num })
    }

    render() {
        return (
            <div className="tab_con">
                <div className="tab_btns">
                    <input type="button" value="按钮1" onClick={this.handleClik.bind(this, 1)} className={this.state.num === 1 ? 'active': ''} />
                    <input type="button" value="按钮2" onClick={this.handleClik.bind(this, 2)} className={this.state.num === 2 ? 'active' : ''} />
                    <input type="button" value="按钮3" onClick={this.handleClik.bind(this, 3)} className={this.state.num === 3 ? 'active' : ''} />
                </div>
                <div className="tab_cons">
                    <div className={this.state.num === 1 ? 'current' : ''}>按钮1对应的内容</div>
                    <div className={this.state.num === 2 ? 'current' : ''}>按钮2对应的内容</div>
                    <div className={this.state.num === 3 ? 'current' : ''}>按钮3对应的内容</div>
                </div>
            </div>
        )
    }
}
