const inti =[]


const PhotoReducer = (state=inti,action)=> {
    if(action.type==="GET_PHOTO_LIST") {
        return {
            ...state , 
            photos:action.payload
        }
    }else if (action.type==='ADD_PHOTO') {
        return  action.payload

    } else if (action.type==="REMOVE_PHOTO") {
        return  action.payload
    }
        else return state
        
   
}
export default PhotoReducer