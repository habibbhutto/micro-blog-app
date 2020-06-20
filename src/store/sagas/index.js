import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_ALL_POSTS,
  FETCH_POST_DETAILS,
  FETCH_POST_COMMENTS,
} from '../actions';

import {
  fetchAllPostSucceeded,
  fetchAllPostFailed,
  fetchPostDetailsSucceeded,
  fetchPostDetailsFailed,
  fetchPostCommentsSucceeded,
  fetchPostCommentsFailed,
} from '../actions';

/**
 * Get list of the blog posts
 * @param {*} action
 */
export function* getAllBlogPosts() {
  try {
    const response = yield call(
      axios.get,
      'https://jsonplaceholder.cypress.io/posts'
    );
    yield put(fetchAllPostSucceeded(response.data));
  } catch (e) {
    console.log('error: ', e);
    yield put(fetchAllPostFailed(e));
  }
}

/**
 * Get details of the post
 * @param {*} param0
 */
export function* getPostDetails({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.cypress.io/posts/${payload}`
    );

    yield put(fetchPostDetailsSucceeded(response.data));
  } catch (e) {
    console.log('error: ', e);
    yield put(fetchPostDetailsFailed(e));
  }
}

/**
 * Get details of the post
 * @param {*} param0
 */
export function* getPostComments({ payload }) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.cypress.io/posts/${payload}/comments`
    );

    yield put(fetchPostCommentsSucceeded(response.data));
  } catch (e) {
    console.log('error: ', e);
    yield put(fetchPostCommentsFailed(e));
  }
}

/**
 * combine all sagas
 */
function* blogSaga() {
  yield takeLatest(FETCH_ALL_POSTS, getAllBlogPosts);
  yield takeLatest(FETCH_POST_DETAILS, getPostDetails);
  yield takeLatest(FETCH_POST_COMMENTS, getPostComments);
}

export default blogSaga;
