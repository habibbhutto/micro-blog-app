import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import T from 'prop-types';

import { fetchPostDetails, fetchPostComments } from '../../store/actions';
import CommentsList from '../CommentsList';
import MessageCard from '../MessageCard';

export class PostView extends Component {
  static propTypes = {
    fetchPostDetails: T.func,
    params: T.object,
  };

  componentDidMount() {
    const { params } = this.props;

    this.props.fetchPostDetails(params.id);
    this.props.fetchPostComments(params.id);
  }

  renderComments = (comments) => {
    if (comments && comments.error) {
      return (
        <MessageCard
          title='Something went wrong'
          message={comments.error.message}
        />
      );
    }

    return <CommentsList comments={comments}></CommentsList>;
  };

  render() {
    const { post, comments } = this.props;

    if (!post) {
      return (
        <MessageCard key='no-blog-post' title='Fetching blog post' message='' />
      );
    }

    if (post.error) {
      return (
        <MessageCard
          title='Something went wrong'
          message={post.error.message}
        />
      );
    }

    const { title, body, updatedAt } = post;

    return (
      <div>
        <div className='blog-post-card'>
          <Link to='/'>
            <button className='continue-button'>Back</button>
          </Link>
          <Fragment>
            <h3 className='title'>{title}</h3>
            <p className='date-time'>{updatedAt}</p>
            <p>{`${body} ${body} ${body} ${body} ${body}`}</p>
          </Fragment>
          {this.renderComments(comments)}
        </div>
      </div>
    );
  }
}

export const mapStateToProps = ({ activePost, comments }) => ({
  post: activePost,
  comments,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchPostDetails(id) {
    dispatch(fetchPostDetails(id));
  },
  fetchPostComments(id) {
    dispatch(fetchPostComments(id));
  },
});

const ConnectedPostView = connect(mapStateToProps, mapDispatchToProps)(PostView);

// Wrapper to pass URL params as props (react-router-dom v6 compatibility)
function PostViewWrapper(props) {
  const params = useParams();
  return <ConnectedPostView {...props} params={params} />;
}

export default PostViewWrapper;
