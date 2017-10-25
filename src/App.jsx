import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Application for task management</h1>
                </header>
                {this.props.children}
                <footer className="App-footer">
                    <h1 className="App-title">Footer for app</h1>
                </footer>
            </div>

        );
    }
}

export default App;
