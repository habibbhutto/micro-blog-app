import reducer from './index';
import {
  fetchAllPostSucceeded,
  fetchAllPostFailed,
  fetchPostDetailsSucceeded,
  fetchPostDetailsFailed,
  fetchPostCommentsSucceeded,
  fetchPostCommentsFailed,
} from '../actions';

test('processes action fetchAllPostSucceeded', async () => {
  //arrange
  const post = {
    id: 'dummyId',
    title: 'dummy title',
    body: 'dummy body',
  };
  const state = {};

  //act
  const result = reducer(state, fetchAllPostSucceeded([post]));
  //assert
  expect(result.posts[0].updatedAt).toBeTruthy();
});

test('processes fetchAllPostFailed', async () => {
  //arrange
  const dummyError = { error: 'dummy error' };
  const state = {};

  //act
  const result = reducer(state, fetchAllPostFailed(dummyError));
  //assert
  expect(result.posts.error).toBeTruthy();
});

test('processes fetchPostDetailsSucceeded', async () => {
  //arrange
  const post = {
    id: 'dummyId',
    title: 'dummy title',
    body: 'dummy body',
  };
  const state = {};

  //act
  const result = reducer(state, fetchPostDetailsSucceeded(post));
  //assert
  expect(result.activePost.id).toBeTruthy();
});

test('processes fetchPostDetailsFailed', async () => {
  //arrange
  const dummyError = { error: 'dummy error' };
  const state = {};

  //act
  const result = reducer(state, fetchPostDetailsFailed(dummyError));
  //assert
  expect(result.activePost.error).toBeTruthy();
});

test('processes fetchPostCommentsSucceeded', async () => {
  //arrange
  const comment = {
    email: 'dummy email',
    name: 'dummy name',
    body: 'dummy body',
  };
  const state = {};

  //act
  const result = reducer(state, fetchPostCommentsSucceeded([comment]));
  //assert
  expect(result.comments[0].email).toBeTruthy();
});

test('processes fetchPostCommentsSucceeded', async () => {
  //arrange
  const dummyError = { error: 'dummy error' };
  const state = {};

  //act
  const result = reducer(state, fetchPostCommentsFailed(dummyError));
  //assert
  expect(result.comments.error).toBeTruthy();
});

test('processes default state', async () => {
  //arrange
  const state = { dummy: 'dummy' };
  const action = { type: 'INVALID_ACTION_NAME', payload: [] };

  //act
  const result = reducer(state, action);
  //assert
  expect(result).toBe(state);
});
