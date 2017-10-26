import React from 'react';
import {Link} from 'react-router-dom'
import CardList from '../containers/CardList';
import './MainPage.css'

const MainPage = (props) => (
    <div className="Main-body">
        <div className="Main-todos-body">
            <div className="Main-status-container-wrapper">
                <CardList status={'ToDo'}/>
            </div>
            <div className="Main-status-container-wrapper">
                <CardList status={'inProgress'}/>
            </div>
            <div className="Main-status-container-wrapper">
                <CardList status={'Done'}/>
            </div>
        </div>
        <div className="add_todo_block">
            <div className="link-wrapper"><Link className="l_col" to={`/add`}>Add new Card </Link></div>
        </div>
    </div>
)

export default MainPage;

