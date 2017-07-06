import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewPost from './components/NewPost'
import Post from './components/Post'

//middleware

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div className="ui container">
        <Route path='/' component={App} />
        <Route exact path='/' component={Post} />
        <Route path='/newpost' component={NewPost} />
      </div>
    </Provider>
  </Router>

  ,
  document.getElementById('root'));
