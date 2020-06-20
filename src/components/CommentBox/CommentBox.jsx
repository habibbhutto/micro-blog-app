import React, { Component, Fragment } from 'react';
import './CommentBox.css';

class CommentBox extends Component {
  render() {
    const { body, name, email } = this.props.comment;
    const formatedUserName = `${name} <${email}>`;
    return (
      <div className='comment-card'>
        <Fragment>
          <p className='body'>{body}</p>
          <p className='user-name'>{formatedUserName}</p>
        </Fragment>
      </div>
    );
  }
}

export default CommentBox;
