import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeList } from '../myRedux/mySlices/wishList';
import './wishList.css';
export default function WishList() {

    let wishlistArray = useSelector((state)=>state.wishlist.value)
    const exec = useDispatch();
    try{
    return (<div className="wishlistWrapper">
        <h2>WishList: {wishlistArray.length?wishlistArray.length:0}</h2>
        <ul className='wishlist'>
        {wishlistArray.map((item,index)=>{
            return<li key={index} onClick={()=>exec(removeList(item.id))}><span className='wishlistIndex'><strong>{index+1}.</strong></span> <span className='wishlistTitle'>{item.volumeInfo.title}</span></li>
        })}
    </ul>
    </div>);
    }catch(e){
        console.error(e);
    }
}
