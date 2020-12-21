import {
  SET_POSTS,
  ADD_LIKED,
  CREATING_POST,
  POST_CREATED,
} from '../actions/actionTypes';

const initialState = {
  posts: [],
  isUploading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_LIKED:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            if (post.liked) {
              post.liked = post.liked.concat(action.payload.liked);
            } else {
              post.liked = [action.payload.liked];
            }
          }
          return post;
        }),
      };
    case CREATING_POST:
      return {
        ...state,
        isUploading: true,
      };
    case POST_CREATED:
      return {
        ...state,
        isUploading: false,
      };
    default:
      return state;
  }
};

export default reducer;
