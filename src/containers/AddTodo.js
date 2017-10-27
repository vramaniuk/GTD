import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import './AddTodo.css'

let AddTodo = ({dispatch}) => {
    let name;
    let status;
    let category;
    let details;

    return (
        <div className="form-wrapper">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!name.value.trim()) {
                        return
                    }
                    dispatch(addTodo(name.value, status.value, category.value, details.value));
                    name.value = '';
                    details.value = '';
                }}
            >
                <fieldset>
                    <legend>add new card</legend>
                    <label>name<input className='fdiv' name="name" placeholder="card name" ref={node => {
                        name = node
                    }}/></label><br/>

                    <label>status<select defaultValue="ToDo" ref={node => {
                        status = node
                    }}>
                        <option>ToDo</option>
                        <option>inProgress</option>
                        <option>Done</option>
                    </select></label><br/>
                    <label>type<select defaultValue="task" ref={node => {
                        category = node
                    }}>
                        <option>task</option>
                        <option>bug</option>
                    </select></label><br/>
                    <label style={{display:"block",color:"grey"}}>Description</label><textarea
                        placeholder="description"
                        rows="10" cols="60"
                        ref={node => {
                        details = node
                    }}>
                    </textarea><br/>
                    <button className="button save" type="submit">
                        Add Card
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default connect()(AddTodo)