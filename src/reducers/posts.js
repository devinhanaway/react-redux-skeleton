import { SET_POSTS, ADD_POST} from '../components/actions'


export default function Posts(state = [], action = {}){
  switch(action.type){
    case ADD_POST:
      return [
        ...state,
        action.post
      ];
    case SET_POSTS:
      return action.posts
    default: return state;
  }
}
