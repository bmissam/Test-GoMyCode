
const SearchReducer =(state='',action)=> {
    if (action.type==='SET_NAME') {
        return state=action.payload

    }else return state
}

export default SearchReducer