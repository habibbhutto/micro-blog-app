import React, { Component } from 'react';
import CommentBox from '../CommentBox';
import './CommentsList.css';

class CommentsList extends Component {
  render() {
    const { comments } = this.props;
    return (
      <div className='comments-list-box'>
        <h4 className='title'>Comments</h4>
        <div>
          {comments.map((comment) => (
            <CommentBox key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default CommentsList;
