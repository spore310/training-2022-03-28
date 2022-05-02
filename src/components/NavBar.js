import React from 'react';

const Nav =(props)=>{
    const{toogleList, refresh} = props;
    return<div className="navBar">
        <button onClick={refresh}>Home</button>
        <button onClick={toogleList}>Show Wish List</button>
    </div>
}
export default Nav