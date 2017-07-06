import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';


import App from './App';
import NewPost from './components/NewPost'
import Post from './components/Post'
import SimpleMap from './components/SimpleMap'

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
      <Route path='/simplemap' component={SimpleMap} />
      </div>
    </Provider>
  </Router>

  ,
  document.getElementById('root'));
