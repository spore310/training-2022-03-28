import React from 'react';
import Nav from './navBar';
import { SearchBar } from './SearcBar';
import WishList from './wishList';
import './style.css'
import ResultBar from './resultBar';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BookList: [],
            WishList: [],
            SearchValue: '',
            wishListVisible: true
        };
        //bind methods here   
        this.showWishList = this.showWishList.bind(this);
        this.refreshData = this.refreshData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.addWishList = this.addWishList.bind(this);
        
    }
    showWishList(e) {
       if(this.state.wishListVisible === true){
           this.setState({wishListVisible: false});
       }else if(this.state.wishListVisible ===false){
           this.setState({wishListVisible: true});
       }
        console.log(this.state.wishListVisible)
    }
    refreshData(e) {
        console.log(e.target)
    }
    addWishList(item){
        const title = item.title
        console.log(title)
        this.setState({WishList: [title,...this.state.WishList]})
    }
    handleChange(e) {
        this.setState({ SearchValue: e.target.value })

    }
    async handleSubmit(e) {
        e.preventDefault();
        const newData = this.state.SearchValue.trim();
        if (newData === "") {
            return alert('please make a valid input!')
        }
        this.setState({ SearchValue: newData });
    }
    handleDelete(itemIndex) {
        const newArray = this.state.WishList.filter((element, index) => index != itemIndex);
        this.setState({ WishList: [...newArray] });
    }
    render() {
        return <div className='main'>
            
            <Nav refresh={this.refreshData} toogleList={this.showWishList} />

            <SearchBar
                onSubmit={this.handleSubmit}
                currentValue={this.state.SearchValue}
                setValue={this.handleChange}/>

            <div className="mainLists">
                <ResultBar Search={this.state.SearchValue} addList={this.addWishList}/>
                <WishList toogle={this.state.wishListVisible}Query={this.state.WishList} selfDelete={this.handleDelete} />
            </div>

        </div>
    }


}
export default App;