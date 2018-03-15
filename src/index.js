import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Tutorials Redux
//###################################################
import { combineReducers,    createStore} from 'redux'
import { Provider } from 'react-redux'



//Import reducer
import productsReducer from './reducers/products-reducer';
import  userReducer  from './reducers/user-reducer';





const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});


//createsStore(Reducer,Payload)
const store = createStore(
    allReducers, {
        products: [{
            name: 'iPhone - iOS'
        }, {
            name: 'Android - Samsung'
        }],
        user: 'X-c0d3z'
    },
    //For support plugin Redux DevTools
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

//update ค่า state
store.subscribe(()=> {
    console.log("Update Store " + store.getState());
});

//เปลี่ยนแปลงค่า state 
//store.dispatch(updateUserAction);


//###################################################


//AIzaSyDHfbr14FlehxCcAn02QNXY8XBdhlaPS-Y


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();