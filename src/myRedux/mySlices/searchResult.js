import { createSlice } from "@reduxjs/toolkit"
const searchResultSlice = createSlice({
    name:'searchResult',
    initialState:{
        value:[],
        pagArray:[],
        currentPage:0,
        page:[]
    },
    reducers:{
        hydrateList:(state, action) =>{
            const newArray = action.payload;
            state.value = [...newArray]
        },
        setPagination:(state,action)=>{
            try{
            const {perPage, numOfPages} = action.payload;
            let temp =[];
            let counter=0;
            for(let i=0;i<numOfPages;i++){
                let tempArray =[]
                for(let j=0;j<perPage;j++){
                    if(state.value[counter]){
                        tempArray.push(state.value[counter]);
                        counter++;
                    }
                }
                temp.push(tempArray);
            }
           state.pagArray = [...temp];
           state.currentPage=0
        }catch(e){console.error(e)}
        },
        changePage:(state,action)=>{
            const limit = state.pagArray.length;
            let newValue = action.payload;
            if(newValue <= limit&&newValue>=0){
                state.currentPage = newValue;
                state.page = state.pagArray[newValue];
            }else{
                console.warn('invalid page change!');
            }
        },
    }
});
export const {hydrateList, setPagination, changePage} = searchResultSlice.actions;
export default searchResultSlice.reducer;