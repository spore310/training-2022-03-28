import React from 'react';

export const SearchBar=(props)=>{
    const {onSubmit, setValue, currentValue} = props;
    
    return <div className='searchBar'>
        <input type="search" onChange={setValue} value={currentValue} placeholder="Search"></input>
        <button onClick={onSubmit}>Search</button>
    </div>
}