import React from 'react';
import {Link} from 'react-router-dom';
import './DetailsPage.css';

const DetailsPage = () => (
    <div className="details-body">
        <div className="card-details">
            <h1>Card details Page</h1>
            <div id="form_div">
                <form name='card' action="" target="">
                    <fieldset>
                        <legend>Change you card</legend>

                        <label>name<input className='fdiv' name="name" placeholder="card name"/></label><br/>

                        <label>status<select>
                            <option>ToDo</option>
                            <option>inProgress</option>
                            <option>Done</option>
                        </select></label><br/>
                        <label>type<select>
                            <option>task</option>
                            <option>bug</option>
                        </select></label>
                    </fieldset>
                </form>
            </div>
            <Link to={`/`}>
                <h1>Save</h1>
            </Link>

        </div>
    </div>
);

export default DetailsPage;