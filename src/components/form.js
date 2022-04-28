import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div>
            <button onClick={(e)=>this.props.tick(e)}>increment1</button>
            <input type="text" id='user-input' ref={this.props.input} placeholder="Input Todo item"></input>
        </div>
    }
}

export default Form;