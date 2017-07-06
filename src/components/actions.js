export const SET_POSTS = "SET_POSTS"
export const ADD_POST = "ADD_POST"

function handleReponse(response){
  if(response.ok){
    return response.json();
  }else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setPosts(posts){
  return {
    type: SET_POSTS,
    posts
  }
}

export function addPost(post){
  return {
    type: ADD_POST,
    post
  }
}

export function savePost(data){
  return dispatch => {
     return fetch('http://localhost:8080/api/posts', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleReponse)
    .then(data => dispatch(addPost(data.post)))
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch('http://localhost:8080/api/posts')
      .then(res => res.json())
      .then(data => dispatch(setPosts(data.posts)))
  }
}
