import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    
    count() {
    this.setState({
        count: this.state.count + 1 
    }, ()=> console.log(this.state.count))
    }
    render() {
        return (
            <div>
                Count - {this.state.count} <br></br>
                <button onClick={()=>this.count()}>Count</button>
            </div>
        )
    }
}

export default Counter
