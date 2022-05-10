import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeList } from '../myRedux/mySlices/wishList';
import './wishList.css';
export default function WishList() {

    let wishlistArray = useSelector((state)=>state.wishlist.value)
    const exec = useDispatch();
    try{
    return (<div className="wishlistWrapper">
        <span><strong>WishList: {wishlistArray.length?wishlistArray.length:0}</strong></span>
        <ul className='wishlist'>
        {wishlistArray.map((item,index)=>{
            return<li key={index} onClick={()=>exec(removeList(item.id))}><strong>{index+1}.</strong> {item.volumeInfo.title}</li>
        })}
    </ul>
    </div>);
    }catch(e){
        console.error(e);
    }
}
