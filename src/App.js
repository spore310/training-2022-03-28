import React from 'react';
import { useSelector } from "react-redux";
import { List } from './components/list';

import { ListInput } from './components/listInput';
import WishList from './components/wishList';
import './app.css';
function App() {

  const result = useSelector((state) => state.searchResult.value)
  return (
    <div className="app">
      <ListInput />
      <div className="lists">
        <List perPage={2} />
        <WishList />
      </div>
    </div>
  );
}

export default App;
