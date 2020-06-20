import React, { Component } from 'react';
import { connect } from 'react-redux';
import T from 'prop-types';

import { fetchAllPosts } from '../../store/actions';
import BlogPost from '../BlogPost';
import MessageCard from '../MessageCard';

export class BlogPostList extends Component {
  static propTypes = {
    fetchAllPosts: T.func,
  };

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  render() {
    const { posts } = this.props;
    if (!posts) {
      return (
        <MessageCard
          key='no-blog-post'
          title='Fetching blog posts...'
          message=''
        />
      );
    }

    if (posts.error) {
      return (
        <MessageCard
          key='no-blog-post'
          title='Something went wrong'
          message={posts.error.message}
        />
      );
    }

    if (posts.length < 1) {
      return (
        <MessageCard
          key='no-blog-post'
          title='No blog posts today!'
          message=''
        />
      );
    }

    return (
      <div>
        {posts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export const mapStateToProps = ({ posts }) => ({
  posts,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchAllPosts() {
    dispatch(fetchAllPosts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostList);
