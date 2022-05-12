import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListItem from './listItem';
import { changePage, setPagination } from '../myRedux/mySlices/searchResult';
import { addList } from '../myRedux/mySlices/wishList';
import './list.css'
export function List({ perPage }) {
    let result = useSelector((state) => state.searchResult.value);
    let paginationArray = useSelector((state) => state.searchResult.pagArray);
    let currentPage = useSelector((state) => state.searchResult.page);
    let currentPageNumber = useSelector((state) => state.searchResult.currentPage);
    const exec = useDispatch();
    try {
        useEffect(() => {

            let numOfPages = Math.ceil(result.length / perPage);
            let num = currentPageNumber ? currentPageNumber : 0;
            exec(setPagination({ perPage, numOfPages }))
            exec(changePage(num))
            console.log('paginated: ', paginationArray);
            console.log('paginated length: ', paginationArray.length);
            console.log('current page: ', currentPage);
            console.log('current pagenumber: ', currentPageNumber)
        }, [result, perPage, currentPageNumber]);

        return (
            <div className="resultList">
                <h2>Page: {currentPageNumber + 1}/{paginationArray.length}</h2>
                <ul>
                    {currentPage.map((item, index) => {
                        return <li key={item.id} onClick={() => exec(addList(item))}><ListItem index={index} entry={item.volumeInfo} /></li>
                    })}
                </ul>
                <div className="paginationList">
                    <div className='paginationBackBtn'>
                        {currentPageNumber > 0 ? <button onClick={() => { exec(changePage(currentPageNumber - 1)) }}>{'<'}</button> : <button disabled>{'<'}</button>}
                    </div>
                    <div className='paginationNumBtn'>
                        {paginationArray.map((page, index) => {
                            switch (index) {
                                case currentPageNumber:
                                    return <button key={index} onClick={() => exec(changePage(index))}>{index + 1}</button>
                                case currentPageNumber + 1:
                                    return <button key={index} onClick={() => exec(changePage(index))}>{index + 1}</button>
                                case currentPageNumber + 2:
                                    return <button key={index} onClick={() => exec(changePage(index))}>{index + 1}</button>
                                case currentPageNumber + 3:
                                    return <button className='btnTick' key={index}>...</button>
                                case currentPageNumber - 1:
                                    return <button key={index} onClick={() => exec(changePage(index))}>{index + 1}</button>
                                case currentPageNumber - 2:
                                    return <button key={index} onClick={() => exec(changePage(index))}>{index + 1}</button>
                                case currentPageNumber - 3:
                                    return <button className='btnTick' key={index}>...</button>
                            }
                        })}
                    </div>
                    <div className='paginationNextBtn'>
                        {currentPageNumber < paginationArray.length - 1 ? <button onClick={() => { exec(changePage(currentPageNumber + 1)) }}>{'>'}</button> : <button disabled>{'>'}</button>}
                    </div>
                </div>
            </div>
        );
    } catch (e) { console.error(e) }
}
