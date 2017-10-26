import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './pages/NotFound';
import { Switch, Route } from 'react-router-dom'
import AddTodoPage from "./pages/AddTodoPage";


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Application for task management</h1>
                </header>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/details' component={DetailsPage}/>
                    <Route path='/add' component={AddTodoPage}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
                <footer className="App-footer">
                    <h1 className="App-title">Create your day</h1>
                </footer>
            </div>

        );
    }
}

export default App;
