import {
  FETCH_ALL_POSTS_SUCCEEDED,
  FETCH_POST_DETAILS_SUCCEEDED,
  FETCH_POST_COMMENTS_SUCCEEDED,
  FETCH_ALL_POSTS_FAILED,
  FETCH_POST_DETAILS_FAILED,
  FETCH_POST_COMMENTS_FAILED,
} from '../actions';

export const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ALL_POSTS_SUCCEEDED:
      const posts = action.payload.map((post) => ({
        ...post,
        updatedAt: `${new Date().toDateString()}`,
      }));
      return { ...state, posts };
    case FETCH_ALL_POSTS_FAILED:
      return { ...state, posts: { error: action.payload } };
    case FETCH_POST_DETAILS_SUCCEEDED:
      return { ...state, activePost: action.payload };
    case FETCH_POST_DETAILS_FAILED:
      return { ...state, activePost: { error: action.payload } };
    case FETCH_POST_COMMENTS_SUCCEEDED:
      return { ...state, comments: action.payload };
    case FETCH_POST_COMMENTS_FAILED:
      return { ...state, comments: { error: action.payload } };
    default:
      return state;
  }
};

export default blogReducer;
