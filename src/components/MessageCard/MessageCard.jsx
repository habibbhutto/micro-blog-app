import React, { Fragment, Component } from 'react';

import './MessageCard.css';

class BlogPost extends Component {
  render() {
    const { title, message } = this.props;
    return (
      <div className='message-card'>
        <Fragment>
          <h3 className='message-title'>{title}</h3>
          <h4 className='message-text'>{message}</h4>
        </Fragment>
      </div>
    );
  }
}

export default BlogPost;
