import React from 'react';

class downVote extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return <div><button onClick={this.props.downVote()}>Decrement</button></div>
    }
}

export default downVote