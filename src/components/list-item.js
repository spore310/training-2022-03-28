import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return this.props.list.map((item)=>{
            <li>{item}</li>
        })
    }
}

export default ListItem;