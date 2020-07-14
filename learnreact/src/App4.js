import React, { Component } from 'react'

// export default class App4 extends Component {

//     handleClik = () => {
//         console.log(111)
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClik}>点我</button>
//             </div>
//         )
//     }
// }

export default class App4 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            num: 0
        }
    }

    handleClik = () => {
        this.setState({ num: this.state.num + 1 })
    }

    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.handleClik.bind(this)}>点我</button>
            </div>
        )
    }
}

