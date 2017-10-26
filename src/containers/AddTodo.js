import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import './AddTodo.css'

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className="form-wrapper">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = ''
                }}
            >
                <fieldset>
                    <legend>add new card</legend>
                    <label>name<input className='fdiv' name="name" placeholder="card name" ref={node => {
                        input = node
                    }}/></label><br/>

                    <label>status<select>
                        <option>ToDo</option>
                        <option>inProgress</option>
                        <option>Done</option>
                    </select></label><br/>
                    <label>type<select>
                        <option>task</option>
                        <option>bug</option>
                    </select></label><br/>
                    <label>Description<textarea rows="10" cols="60">
                    </textarea></label><br/>
                    <button type="submit">
                        Add Todo
                    </button>
                </fieldset>

            </form>
        </div>
    )
}

export default connect()(AddTodo)