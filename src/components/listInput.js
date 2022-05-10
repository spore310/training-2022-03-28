import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import axios from 'axios';
import { hydrateList } from '../myRedux/mySlices/searchResult';
import './inputs.css'
export const ListInput = () => {
    const [input, getInput] = useState("");
    const result = useSelector((state)=>state.searchResult.value);
    const exec = useDispatch();
    useEffect(()=>{
        async function getData(){
            let api = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${input}&startIndex=0&maxResults=40`);
            const {data} = api;
            exec(hydrateList(data.items))
            console.log(result);
        }
        getData();
    },[input]);
    function onSubmit(e) {
        try{
        e.preventDefault();
        console.log('input: ', input)
        getInput('');
        }catch(error){
            console.error(error)
        }
    }
    function handleChange(e){
        getInput(e.target.value);
    }
    return (<div className='inputs'>
        <input type="text" placeholder="Enter an entry" value={input} onChange={handleChange} /> 
        <button onClick={onSubmit}>Search</button>
    </div>);
}
