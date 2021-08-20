https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html

//React Functional Components 
import React from ‘react’;

function HelloWorld(props) {
    return (
        <div>
            <ul>
                <li>{`Property of 1 is ${props.key1}`}</li>
                <li>{`Property of 2 is ${props.key2}`}</li>
                <li>{`Chidren Property is ${props.children}`}</li>
            </ul>
        </div>
        );
}

    //ES6 Version - you can remove () - {name} if there's only one parameter
    //functional component |  State Mangement in userState https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/13556164#overview
    const HelloWorld = ({key1, key2}) => (
        <div>
            <ul>
                <li>{`Property of 1 is ${key1}`}</li>
                <li>{`Property of 2 is ${key2}`}</li>
                <li>{`Chidren Property is ${props.children}`}</li>
            </ul>
        </div>
    );

export default HelloWorld;


import HelloWorld from './foldername/filename';
//Classbased components
class NewWorld extends React.Component {

    state = {
        persons: [
            {name: 'max', age: 24},
            {name: 'jean', age: 24},
            {name: 'john', age: 24}
        ]
    }
    render() {
      return <div>
                <h1>Hello, {this.props.name}</h1>
                <HelloWorld key1={this.state.persons[0].name} key2={this.state.persons[0].age} > Sample Text </HelloWorld>
                <HelloWorld key1={this.state.persons[1].name} key2={this.state.persons[1].age} > Sample Text </HelloWorld>
                <HelloWorld key1={this.state.persons[2].name} key2={this.state.persons[2].age} > Sample Text </HelloWorld>
             </div>;
    }
}

/****************************/
/* Store (const createStore = redux.createStore; ) - Store all state
    Reducer (normally stored in the store folder) - Takes the New State and which action and Replace the old state; Initial state should reside here.
    Dispatcher - Normally resides inside a function handler to invoke the action and pass it to reducer
    Subscriber - Components that subscribe to the store */





const redux = require('redux'); //index.js
const createStore = redux.createStore; //index.js Central Storage to store all state



// Reducer //Inside store/reducer/counter.js 
    /*actionTypes from '../actions';
    export const INCREMENT = 'INCREMENT';
    export const DECREMENT = 'DECREMENT';
    export const ADD = 'ADD';
    export const SUBTRACT = 'SUBTRACT';
    export const STORE_RESULT = 'STORE_RESULT';
    export const DELETE_RESULT = 'DELETE_RESULT';
    */
    import * as actionTypes from '../actions';

    const initialState = {
        counter: 0
    };
    
    //Reducer Takes the New State and which action and Replace the old state
    const reducer = ( state = initialState, action ) => {
        switch ( action.type ) {
            case actionTypes.INCREMENT:
                const newState = Object.assign({}, state);
                newState.counter = state.counter + 1;
                return newState;
            case actionTypes.DECREMENT:
                return {
                    ...state,
                    counter: state.counter - 1
                }
            case actionTypes.ADD:
                return {
                    ...state,
                    counter: state.counter + action.val
                }
            case actionTypes.SUBTRACT:
                return {
                    ...state,
                    counter: state.counter - action.val
                }
        }
        return state;
    };

    export default reducer;


// Reducer //Inside store/reducers/result.js
    import * as actionTypes from '../actions';

    const initialState = {
        results: []
    };

    const reducer = ( state = initialState, action ) => {
        switch ( action.type ) {
            case actionTypes.STORE_RESULT:
                return {
                    ...state,
                    results: state.results.concat({id: new Date(), value: action.result})
                }
            case actionTypes.DELETE_RESULT:
                // const id = 2;
                // const newArray = [...state.results];
                // newArray.splice(id, 1)
                const updatedArray = state.results.filter(result => result.id !== action.resultElId);
                return {
                    ...state,
                    results: updatedArray
                }
        }
        return state;
    };
    export default reducer;

// Store index.js
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux'; //Provider a helper function to connect store to components
    import { createStore, combineReducers } from 'redux'; //combineReducers can combine reducers

    import counterReducer from './store/reducers/counter'; //Import Reducers
    import resultReducer from './store/reducers/result';//Import Reducers
    import './index.css';
    import App from './App';
    import registerServiceWorker from './registerServiceWorker';
    //Combines the reducer
    const rootReducer = combineReducers({
        ctr: counterReducer,
        res: resultReducer
    });
    //Connects reducer to the store
    const store = createStore(rootReducer);
    //Provider connects your store to the entire app 
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    registerServiceWorker();





// Subscription - Inisde Class Container Counter.js
import React, { Component } from 'react';
import { connect } from 'react-redux'; //Connect Container to Store

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
//(This is somewhat like a subscription)Mapping Global State from store Changes to your props - this.props.ctr and this.props.storedResults 
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter, //From Reducers state state.ctr.counter to your container this.props.ctr
        storedResults: state.res.results
    }
};

//Dispaching Action - when onclick or some event calls the property onIncrementCounter . It will dispacth a action from reducer
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}), //when click this.props.onIncrementCounter: executes the dispatch and pass action and value to the reducers
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
};
//export default connect(mapStateToProps, mapDispatchToProps)(Class); // If no mapStateToProps, connect(null, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});



/****************************/

$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app
$ npm start 
    // See package.json start, build, test, eject


//To quit: control + C 
