import React from 'react';
import './wishList.css';

function WishList({ Query, selfDelete, toogle }) {
    
   
    return <div className='WishList'>
       
    <ul className='WishList'>
        {toogle?Query.map((element, index) =>{ 
            return <li className='WishListItem' key={index}><span>{element}</span><button onClick={()=>selfDelete(index)}>Delete</button></li>
        }):null}
    </ul>
    </div>
}

export default WishList