import React from "react";
import { FilterLink } from "./Link";

export const Footer = () => (
    <p>
        Show {' '}
        <FilterLink filter='SHOW_ALL'>All</FilterLink>{' '}
        <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>{' '}
        <FilterLink filter='SHOW_TODO'>Todo</FilterLink>
    </p>
);