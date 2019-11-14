
const inti =[]


const UserReducer = (state=inti,action)=> {
    if(action.type==="GET_USER_LIST") {
        return {
            ...state , 
            users:action.payload
        }
    }else if (action.type==='ADD_USER') {
        return  action.payload

    } else if (action.type==="EDIT_USER") {
        return  {
           ...state , 
           users:action.payload
        }
        
    } else if (action.type==="REMOVE_USER") {
        return action.payload
    }
        else return state
        
   
}
export default UserReducer