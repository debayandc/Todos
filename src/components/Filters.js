import React from 'react'
import { connect } from 'react-redux'
import { filterType } from '../actions'

const Filters = ({ active, children, onClick }) => {
    return (
        <button id="filters-btn" className="filters-btn"
            onClick={onClick}
            disabled={active}
        >
            {children}
        </button>
    )
}

const mapStateToProps = (state, props) => ({
    active: props.filter === state.filter
})

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(filterType(props.id, props.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filters)