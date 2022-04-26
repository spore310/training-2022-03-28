import React from 'react';
import UpVote from './upVote.js';
import DownVote from './downVote.js';
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={counter:0};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment() {
        this.setState({counter:this.state.counter+1})
    }
    decrement() {
        this.setState({counter:this.state.counter-1})
    }
    render(){
        return <div className="counter">
            <span>{this.state.counter}</span>
            <UpVote tick={this.increment}/>
            <DownVote tick={this.decrement}/>
            </div>
    }
}
export default App;