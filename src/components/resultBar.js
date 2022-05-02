import React,{useEffect, useState} from 'react';
import axios from 'axios';
import ResultList from './resultList';
import './resultBar.css';
function ResultBar({Search, addList}){
    const [data, getData] = useState([])
    useEffect(()=>{
    let term = Search?Search:'computers'
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}+intitle&startIndex=0&maxResults=10`).then(res=>{
        const responseData = res.data.items;
        getData(responseData);
    })  

    console.log(data)
    },[Search])

    return<ul className="resultList">{data?.map((element,index)=>{
        return <li className='resultItem'key={element.id}><ResultList addList={addList}api={element.volumeInfo}/></li>
    })}</ul>
}

export default ResultBar