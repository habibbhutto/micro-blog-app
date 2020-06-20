import axios from 'axios';
import { runSaga } from 'redux-saga';
import {
  fetchAllPostSucceeded,
  fetchAllPostFailed,
  fetchPostDetailsFailed,
  fetchPostDetailsSucceeded,
  fetchPostCommentsSucceeded,
  fetchPostCommentsFailed,
} from '../actions';
import { getAllBlogPosts, getPostDetails, getPostComments } from './index';
import { blogPostListData } from '../../components/BlogPostList/BlogPostList.stories';
import { blogPostData } from '../../components/BlogPost/BlogPost.stories';
import { commentsData } from '../../components/CommentsList/CommentsList.stories';

jest.mock('axios');

test('gets all blog posts', async () => {
  // arrange
  axios.get = jest.fn().mockResolvedValue({ data: blogPostListData });
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getAllBlogPosts
  );

  // assert
  expect(dispatched).toEqual([fetchAllPostSucceeded(blogPostListData)]);
});

test('handles get all blog posts failure', async () => {
  // arrange
  const dummyError = { error: 'dummy error' };
  axios.get = jest.fn().mockRejectedValue(dummyError);
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getAllBlogPosts
  );

  // assert
  expect(dispatched).toEqual([fetchAllPostFailed(dummyError)]);
});

test('gets blog post details', async () => {
  // arrange
  axios.get = jest.fn().mockResolvedValue({ data: blogPostData });
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getPostDetails,
    { id: 1 }
  );

  // assert
  expect(dispatched).toEqual([fetchPostDetailsSucceeded(blogPostData)]);
});

test('handles get blog post details failure', async () => {
  // arrange
  const dummyError = { error: 'dummy error' };
  axios.get = jest.fn().mockRejectedValue(dummyError);
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getPostDetails,
    { id: 1 }
  );

  // assert
  expect(dispatched).toEqual([fetchPostDetailsFailed(dummyError)]);
});

test('gets post comments', async () => {
  // arrange
  axios.get = jest.fn().mockResolvedValue({ data: commentsData });
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getPostComments,
    { id: 1 }
  );

  // assert
  expect(dispatched).toEqual([fetchPostCommentsSucceeded(commentsData)]);
});

test('handles get post comments failure', async () => {
  // arrange
  const dummyError = { error: 'dummy error' };
  axios.get = jest.fn().mockRejectedValue(dummyError);
  const dispatched = [];

  // act
  await runSaga(
    {
      dispatch: (action) => dispatched.push(action),
    },
    getPostComments,
    { id: 1 }
  );

  // assert
  expect(dispatched).toEqual([fetchPostCommentsFailed(dummyError)]);
});
