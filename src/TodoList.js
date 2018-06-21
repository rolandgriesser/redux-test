import React from "react";
import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import { connect } from "react-redux";

export const TodoList = ({
    todos,
    onTodoClick
}) => 
    (
    <ul>
        {todos.map(todo => <TodoItem 
            key={todo.id} 
            {...todo}
            onClick={() => onTodoClick(todo.id)} />)}
    </ul>
    );

    const getVisibleTodos = (todos, filter) => {
                switch(filter) {
                    case 'SHOW_TODO':
                        return todos.filter(i => !i.completed);
                    case 'SHOW_COMPLETED':
                        return todos.filter(i => i.completed);
                    case 'SHOW_ALL':
                    default:
                        return todos;
                }
            };

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos, 
            state.visibilityFilter)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    };
};  

export const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export class VisibleTodoList extends React.Component {
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     getVisibleTodos(todos, filter) {
//         switch(filter) {
//             case 'SHOW_TODO':
//                 return todos.filter(i => !i.completed);
//             case 'SHOW_COMPLETED':
//                 return todos.filter(i => i.completed);
//             case 'SHOW_ALL':
//             default:
//                 return todos;
//         }
//     };

//     render() {
//         const props = this.props;
//         const { store } = this.context;
//         const state = store.getState();

//         return (
//             <TodoList 
//                 todos={this.getVisibleTodos(state.todos, state.visibilityFilter)} 
//                 onTodoClick={id => store.dispatch({
//                         type: 'TOGGLE_TODO',
//                         id
//                     }) 
//                 }/>
//             );
//     }
// }
// VisibleTodoList.contextTypes = {
//     store: PropTypes.object
// };