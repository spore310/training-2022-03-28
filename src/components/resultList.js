import React from 'react';

function ResultList({api, addList}){

    return<div onClick={()=>addList(api)}>
        
        {api?.title?<p><strong>Title:</strong> {api.title}</p>:null}
        {api?.publisher?<p><strong>Publisher:</strong> {api.publisher}</p>:null}
        {api?.publishedDate?<p><strong>Published date:</strong> {api.publishedDate}</p>:null}
        {api?.imageLinks?.thumbnail?<img src={api.imageLinks.thumbnail} height='100px' width='100px'></img>:null}
        {api?.description?<p><strong>Description:</strong> {api.description}</p>:null}
        
    </div>
}
export default ResultList