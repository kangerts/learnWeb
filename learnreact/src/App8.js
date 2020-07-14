import React, { Component } from 'react'

export default class App8 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [10, 20, 30, 40, 50, 60, 70, 80, 90],
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((v, k) => {
                            return (
                                // key值一般是数据的ID，有效提高DOM更新效率，减少不必要的DOM操作
                                // 遍历操作必须给循环体中的根标签加入key
                                <li key={k}>{v}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
