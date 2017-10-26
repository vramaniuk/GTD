import React from 'react';
import {Link} from 'react-router-dom'
import CardList from '../containers/CardList';

const MainPage = (props) => (
    <div className="App-body">
        <div className="App-status-container-wrapper">
            <CardList status={'ToDo'}/>
        </div>
        <div className="App-status-container-wrapper">
            <CardList status={'inProgress'}/>
        </div>
        <div className="App-status-container-wrapper">
            <CardList status={'Done'}/>
        </div>
        <div className="add_todo">
            <Link to={`/add`}> Add new Card</Link>
        </div>
    </div>
)

export default MainPage;

