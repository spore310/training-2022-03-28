import React from 'react';

class upVote extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div><button onClick={this.props.upVote()}>Increment</button></div>
    }
}

export default upVote