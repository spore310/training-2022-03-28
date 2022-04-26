import React from 'react';

class UpVote extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <button onClick={()=>this.props.tick()}>Increment</button>
    }
}

export default UpVote;