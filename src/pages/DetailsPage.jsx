import React from 'react';
import {Link} from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = ({id, name, category, status, details, saveTodo, deleteTodo}) => {
    let nameCopy;
    let categoryCopy;
    let statusCopy;
    let detailsCopy;
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
                        saveTodo(id, nameCopy.value, statusCopy.value, categoryCopy.value, detailsCopy.value)
                    }}>
                        <fieldset>
                            <legend>Change you card</legend>

                            <label>name<input className='fdiv' name="name"
                                              placeholder="card name"
                                              defaultValue={name}
                                              ref={node => {
                                                  nameCopy = node
                                              }}/></label><br/>
                            <label>status<select
                                defaultValue={status}
                                ref={node => {
                                    statusCopy = node
                                }}>
                                <option>ToDo</option>
                                <option>inProgress</option>
                                <option>Done</option>
                            </select></label><br/>
                            <label>type<select
                                defaultValue={category}
                                ref={node => {
                                    categoryCopy = node
                                }}>
                                <option>task</option>
                                <option>bug</option>
                            </select></label><br/>
                            <label style={{display:"block",color:"grey"}}>Description</label><textarea
                                rows="10"
                                cols="60"
                                defaultValue={details}
                                ref={node => {
                                    detailsCopy = node
                                }}
                        placeholder="description">
                    </textarea><br/>
                        </fieldset>
                        <div className="actions">
                            <button className="button save" type="submit"><span>Save</span>
                            </button>
                            <button className="button delete" type="button" onClick={e => {
                                e.preventDefault();
                                deleteTodo(id);
                            }}><span>Delete</span>
                            </button>
                        </div>
                    </form>
                </div>

                <Link to={`/`}>
                    <h1>Back to cards</h1>
                </Link>

            </div>
        </div>
    );
};
export default DetailsPage;
