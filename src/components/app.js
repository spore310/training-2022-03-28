import React from 'react';
import upVote from './upVote'
import downVote from './downVote'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0
        }
    }
    incrementCounter(){
        counter +=1
    }
    decrementCounter(){
        counter -= 1;
    }

    render(){
        return <div id ='app'>
            <div>{this.state.counter}</div>
            <div><upVote upVote='incrementCounter()'/></div>
            <div><downVote downVote='decrementCounter()'/></div>
        </div>
    }
}

export default App