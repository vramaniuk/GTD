import React from 'react';
import { Link } from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = ({ id, name, category, status, details, saveTodo, deleteTodo }) => {
    let _name;
    let _category;
    let _status;
    let _details;
    return (
        <div className="details-body">
            <div className="card-details">
                <h1>Card details Page</h1>
                <div id="form_div">
                    <form name='card' action="" target="" onSubmit={e => {
                        e.preventDefault();
                        if (!name.trim()) {
                            return
                        }
                        saveTodo(id, _name, _category, _status, _details)
                    }}>
                        <fieldset>
                            <legend>Change you card</legend>

                            <label>name<input className='fdiv' name="name"
                                              placeholder="card name"
                                              defaultValue={name}
                                              ref={node => {
                                                  _name = node
                                              }} /></label><br />
                            <label>status<select
                                defaultValue={status}
                                ref={node => {
                                    _status = node
                                }}>
                                <option>ToDo</option>
                                <option>inProgress</option>
                                <option>Done</option>
                            </select></label><br />
                            <label>type<select
                                defaultValue={category}
                                ref={node => {
                                    _category = node
                                }}>
                                <option>task</option>
                                <option>bug</option>
                            </select></label><br />
                            <label>Description<textarea
                                rows="10"
                                cols="60"
                                defaultValue={details}
                                ref={node => {
                                    _details = node
                                }}>
                    </textarea></label><br />
                        </fieldset>
                    </form>
                </div>
                <div className="actions">
                    <button type="submit">Save</button>
                    <button type="button" onClick={e => {
                        e.preventDefault();
                        deleteTodo(id);
                    }}>Delete
                    </button>
                </div>
                <Link to={`/`}>
                    <h1>Back to cards</h1>
                </Link>

            </div>
        </div>
    );
};
export default DetailsPage;
