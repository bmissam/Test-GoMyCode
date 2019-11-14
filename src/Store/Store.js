import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import { reducer as modal } from 'redux-modal'
import thunkMiddleware from 'redux-thunk'; 
import UserReducer from '../Reducers/UserReducer';
import PhotoReducer from '../Reducers/PhotoReducer';
import SearchReducer from "../Reducers/SearchReducer"









const middleware = [thunkMiddleware];
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
    );


 
const Store=createStore( combineReducers({
 
 
    users: UserReducer ,
    photos: PhotoReducer  , 
    Search : SearchReducer , 
    modal , 
  

    
}),enhancer)


export default Store 

