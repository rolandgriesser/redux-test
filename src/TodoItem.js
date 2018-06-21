import React from "react";

export const TodoItem = ({
    onClick,
    completed,
    text
}) => 
    (
    <li onClick={onClick} 
        style={{ 
            textDecoration: completed ? 'line-through' : 'none' 
        }}
    >            
        {text}
    </li>
    );