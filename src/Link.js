import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "./ActionCreator";

export const Link = ({
    active,
    children,
    onClick
}) => {
        if(active){
            return <span>{children}</span>;
        }
        else
        {
            return (
            <a href='#' onClick={e => {
                e.preventDefault();
                onClick();
            }}>{children}</a>);
        }
};

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.visibilityFilter === ownProps.filter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    };
};

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);


// export class FilterLink extends React.Component {
//     componentDidMount() {
//         const { store } = this.context;
//         this.unsubscribe = store.subscribe(() => this.forceUpdate());
//     }

//     componentWillUnmount() {
//         this.unsubscribe();
//     }

//     render() {
//         const props = this.props;
//         const { store } = this.context;
//         const state = store.getState();

//         return <Link
//             active={state.visibilityFilter === props.filter}
//             onClick={() => store.dispatch({
//                 type: 'SET_VISIBILITY_FILTER',
//                 filter: props.filter
//             })}>{props.children}</Link>
//     }
// }
// FilterLink.contextTypes = {
//     store: PropTypes.object
// };