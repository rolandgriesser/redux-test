import React from 'react';
import {store} from './index'
import { VisibleTodoList } from "./TodoList";
import { AddTodo } from './AddTodo';
import { Footer } from "./Footer";


export const TodoApp = () => (
    <div>
            
            <AddTodo />
            <VisibleTodoList />            
            <Footer />
        </div>
        );