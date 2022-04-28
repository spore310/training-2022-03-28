import React from 'react';
import Form from './form.js';
import List from './list.js';
import './style.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={list:[]};

        this.addList = this.addList.bind(this);
    }
    inputRef = React.createRef();

    addList() {
        let userInput = this.inputRef.current.value;
        console.log([...this.state.list,userInput])
        this.setState({list: [...this.state.list,userInput]});
    }
    
    render(){
        return <div className="todo-list">
            <Form tick={this.addList} input={this.inputRef} />
            <List list={this.state.list}/>
            </div>
    }
}
export default App;