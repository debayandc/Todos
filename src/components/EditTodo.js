import React from 'react'
import { connect } from 'react-redux'
import { update } from '../actions'

const EditTodo = ({ dispatch, id, placeholder }) => {
    let input = placeholder;
    const handleSubmit = e => {
        e.preventDefault();
        if (!input.value.trim()) {
            return
        }
        dispatch(update(id, input.value))
        input.value = ''
    }

    const handleOnBlur = e => {
        if (!input.value.trim()) {
            return
        }
        dispatch(update(id, input.value))
        input.value = ''
    }

    return (
        <React.Fragment>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="input-no-style edit-input-override"
                    required
                    type="text"
                    defaultValue={input}
                    ref={node => (input = node)}
                    onBlur={handleOnBlur}
                />
            </form>
        </React.Fragment>
    )
}


export default connect()(EditTodo)