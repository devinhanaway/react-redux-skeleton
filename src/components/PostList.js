import React from 'react';
import PostCard from './PostCard'

export default function PostList({ posts }) {
  const emptyMessage = (
    <p>There are no posts yet</p>
  )

  const postList = (
    <div className="ui four cards">
      {posts.map(post => <PostCard post={post} key={post._id}/>)}
    </div>

  )
  return(
    <div>
      {posts.length === 0 ? emptyMessage : postList}
    </div>

  )
}

PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
}
