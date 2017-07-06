import React from 'react';

export default function PostCard({post}){
  return (
    <div className="ui card">
      <div className="image">
        <img src={post.image} alt="Insert funny image"/>
      </div>
      <div className="content">
        <div className="header">{post.title}</div>
        <div className="content">{post.content}</div>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: React.PropTypes.object.isRequired
}
