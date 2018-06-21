import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "./ActionCreator";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchImpressions = (test) => {
    return (dispatch, getState) => {
        return new Promise(resolve => {
            dispatch({
                type: 'TEST1'
            });

            sleep('2000');
            dispatch({
                type: 'TEST1'
            });

            resolve();
        });
    };
}

export let AddTodo = ({ dispatch }) => {
    
    let input;
    return (
        <div>
            <input ref={node => {
                        input = node;
                    }} />
                    <button onClick={() => {
                        dispatch(fetchImpressions('asdf'));
                            //dispatch(addTodo(input.value));
                            input.value = '';
                        }
                        }>Add</button>
        </div>
    );
};
AddTodo = connect()(AddTodo);


// export const AddTodo = (props, { store }) => {
    
//     let input;
//     return (
//         <div>
//             <input ref={node => {
//                         input = node;
//                     }} />
//                     <button onClick={() => {
//                             store.dispatch({
//                                 type: 'ADD_TODO',
//                                 text: input.value,
//                                 id: nextTodoId++
//                             });
//                             input.value = '';
//                         }
//                         }>Add</button>
//         </div>
//     );
// };

// AddTodo.contextTypes = {
//     store: PropTypes.object
// };