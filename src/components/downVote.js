import React from 'react';

class DownVote extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <button onClick={()=>this.props.tick()}>Decrement</button>
    }
}

export default DownVote;