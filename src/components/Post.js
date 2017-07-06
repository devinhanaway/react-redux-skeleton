import React, { Component } from 'react';
import '../App.css';

import Image1 from './assets/img1.jpg'

import PostList from './PostList'

import { connect } from 'react-redux'

import { fetchPosts } from './actions'

class Post extends Component {
  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    return(
      <div>
        <PostList posts={this.props.posts} />
        {/* <div className="well container row">
          <img src={Image1} className="col-md-4"></img>
          <h3 className="col-md-8">Title</h3>
          <h5>Post Content</h5>
          <button className="btn btn-info">Edit Post</button>
        </div> */}
      </div>
    )
  }
}

Post.propTypes = {
  posts: React.PropTypes.array.isRequired,
  fetchPosts: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return{
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(Post)
