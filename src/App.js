import React, { Component } from 'react';
import './App.css';

import Post from './components/Post'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="ui container">
          <h1 className="ui header">Reddit Clone <small>Now With React And Redux 👾</small></h1>
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/newpost">Add a new post</Link>
          <Link className="item" to="/login">Sign in/Sign Up</Link>
        </div>
      </div>

    );
  }
}

export default App;
