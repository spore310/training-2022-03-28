import React from 'react';
import ListItem from './list-item.js';
class List extends React.Component {
    constructor(props){
        super(props);
        this.foo = this.foo.bind(this);
    }
    foo(e){
        let listItem = e.target.parentNode;
        let list = listItem.parentNode;
        list.removeChild(listItem);
    }
    render(){
        return<ul className='list'>{this.props.list.map((item,index)=><li className='list-item' key={index}><span>{item}</span><button onClick={(e)=>this.foo(e)} >Delete</button></li>)}</ul>
    }
}

export default List;