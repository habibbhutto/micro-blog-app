import { createAction } from 'redux-actions';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const fetchAllPosts = createAction(FETCH_ALL_POSTS);

export const FETCH_ALL_POSTS_SUCCEEDED = 'FETCH_ALL_POSTS_SUCCEEDED';
export const fetchAllPostSucceeded = createAction(FETCH_ALL_POSTS_SUCCEEDED);

export const FETCH_ALL_POSTS_FAILED = 'FETCH_ALL_POSTS_FAILED';
export const fetchAllPostFailed = createAction(FETCH_ALL_POSTS_FAILED);

export const FETCH_POST_DETAILS = 'FETCH_POST_DETAILS';
export const fetchPostDetails = createAction(FETCH_POST_DETAILS);

export const FETCH_POST_DETAILS_SUCCEEDED = 'FETCH_POST_DETAILS_SUCCEEDED';
export const fetchPostDetailsSucceeded = createAction(
  FETCH_POST_DETAILS_SUCCEEDED
);

export const FETCH_POST_DETAILS_FAILED = 'FETCH_POST_DETAILS_FAILED';
export const fetchPostDetailsFailed = createAction(FETCH_POST_DETAILS_FAILED);

export const FETCH_POST_COMMENTS = 'FETCH_POST_COMMENTS';
export const fetchPostComments = createAction(FETCH_POST_COMMENTS);

export const FETCH_POST_COMMENTS_SUCCEEDED = 'FETCH_POST_COMMENTS_SUCCEEDED';
export const fetchPostCommentsSucceeded = createAction(
  FETCH_POST_COMMENTS_SUCCEEDED
);

export const FETCH_POST_COMMENTS_FAILED = 'FETCH_POST_COMMENTS_FAILED';
export const fetchPostCommentsFailed = createAction(FETCH_POST_COMMENTS_FAILED);
