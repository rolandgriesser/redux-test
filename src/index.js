import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import {createStore, combineReducers } from 'redux';
import './index.css';
import {TodoApp} from './TodoApp';
import deepFreeze from 'deep-freeze-strict';
import expect from 'expect';
import App from './App';
import { Counter } from './Counter'
import registerServiceWorker from './registerServiceWorker';

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return { 
                id: action.id,
                text: action.text,
                completed: false};
        case 'TOGGLE_TODO':
            if(action.id === state.id)
                return {
                    ...state,
                    completed: !state.completed
                };
            return state;
        case 'TEST1':
        case 'TEST2':
                console.log('Handled action ' + action.type);
            return state; 
    }

    return state;
};

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
            return state.map(i => todo(i, action));
    }

    return state;
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {

    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
        {
            return action.filter;
        }
    }

    return state;
};

// const combineReducers = (reducers) => {
//     return (state = {}, action) => {
//         return Object.keys(reducers).reduce(
//             (nextState, key) => {
//                 nextState[key] = reducers[key](state[key], action);
//                 return nextState;
//             }, {}
//         );
//     };
// };

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

// const todoApp = (state = {}, action) => {
//     return { 
//         todos: todos(state.todos, action),
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//     };
// };

// export class Provider extends React.Component {
//     getChildContext() {
//         return {
//             store: this.props.store
//         };
//     }

//     render() {
//         return this.props.children;
//     }
// }
// Provider.childContextTypes = {
//     store: PropTypes.object
// };

const render = () => {
    ReactDOM.render(<Provider store={createStore(todoApp)}><TodoApp /></Provider>, document.getElementById('root'));
}

//store.subscribe(render);
render();

// console.log('-- initial state --');
// console.log(store.getState());
// console.log('-------------------');

// console.log('Dispatching ADD_TODO');
// store.dispatch({ type: 'ADD_TODO', 
//     id: 0,
//     text: 'test1'});

// console.log('-- current state --');
// console.log(store.getState());
// console.log('-------------------');

// console.log('Dispatching ADD_TODO');
// store.dispatch({ type: 'ADD_TODO', 
//     id: 1,
//     text: 'test2'});

// console.log('-- current state --');
// console.log(store.getState());
// console.log('-------------------');

// console.log('Dispatching TOGGLE_TODO');
// store.dispatch({ type: 'TOGGLE_TODO', 
//     id: 1 });




//     console.log('-- current state --');
//     console.log(store.getState());
//     console.log('-------------------');






// const todos = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_TODO':
//             return [...state, {
//                 id: action.id,
//                 text: action.text,
//                 completed: false
//             }];    
//         case 'TOGGLE_TODO':
//             return state.map((i) => {
//                 if(i.id === action.id)
//                     return {...i, completed: !i.completed};
//                 return i;
//             }); 
//     }

//     return state;
// };

// const testAddTodo = () => {
//  const stateBefore = [];
//  const action = {
//      type: 'ADD_TODO',
//      id: 0,
//      text: 'Test 1'
//  };
//  const stateAfter = [{
//     id: 0,
//     text: 'Test 1',
//     completed: false
// }];

//  deepFreeze(stateBefore);
//  deepFreeze(action);
//  expect(todos(stateBefore, action)).toEqual(stateAfter);
// };

// const testToggleTodo = () => {
//     const stateBefore = [
//         {
//         id: 0,
//         text: 'Test 1',
//         completed: false
//     },
//     {
//         id: 1,
//         text: 'Test 2',
//         completed: false
//     }];
    
//     const action = {
//         type: 'TOGGLE_TODO',
//         id: 1
//     };
    
//     const stateAfter = [
//         {
//         id: 0,
//         text: 'Test 1',
//         completed: false
//     },
//     {
//         id: 1,
//         text: 'Test 2',
//         completed: true
//     }];

//     deepFreeze(stateBefore);
//     deepFreeze(action);
//     expect(todos(stateBefore, action)).toEqual(stateAfter);
// };

// testAddTodo();
// testToggleTodo();
// console.log('Passed all tests');

// const counter = (state = 0, action) => {
  
//     switch(action.type) {
//       case 'INCREMENT':
//         return state + 1;
//       case 'DECREMENT':
//         return state - 1;
//       default:
//         return state;
//     }
//   }


// const store = createStore(counter);

// const increment = () => {
//     const item = { completed: true, test: 'testasdf'};
//     const item2 = { ...item, completed: false };
//     console.log(item);
//     console.log(item2);

//     store.dispatch({type: 'INCREMENT'});
// }


// const decrement = () => {
//     store.dispatch({type: 'DECREMENT'});
// }
// const render = () => {
//     ReactDOM.render(<Counter value={store.getState()} onIncrement={increment} onDecrement={decrement} />, document.getElementById('root'));
// };

// store.subscribe(render);
// render();

// // document.addEventListener('click', () => {
// // store.dispatch({type: 'INCREMENT'});
// // });

// registerServiceWorker();
