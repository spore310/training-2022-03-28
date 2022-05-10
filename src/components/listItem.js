import React from 'react';
import './listItem.css'
function ListItem({ entry, index }) {
    try{
    const { description, publisher, publishedDate, authors, imageLinks } = entry;
    const thumbnail = imageLinks?.thumbnail;
    return (<>

        <div className='listItemCard'>
            <div className='listItemImage'>
                {thumbnail ? <img src={thumbnail} height='10px' width='10px'></img> : null}
            </div>
            <div className='listItemInfo'>
                <div className='listItemTitle'>
                    {entry?.title ? <span><strong>Title: {entry.title}</strong></span> : null}
                </div>
                <div className='listItemPublisher'>
                    {publisher ? <span><strong>Publisher</strong>: {publisher}</span> : null}
                </div>
                <div className='listItemPublishedDate'>
                    {publishedDate ? <span><strong>Publish:</strong>{publishedDate}</span> : null}
                </div>
                <div className='listItemAuthors'>
                    {authors ? <span><strong>Authors:</strong> {authors.join(', ')}</span> : null}
                </div>
                <div className='listItemDescription'>
                    {description ? <span><strong>Description:</strong>{description}</span> : null}
                </div>
            </div>
        </div>
    </>
    );
    }catch(e){
        console.error(e);
    }
}
export default ListItem