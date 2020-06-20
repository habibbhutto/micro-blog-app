import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

import './BlogPost.css';

class BlogPost extends Component {
  renderContinueReading(id) {
    if (id) {
      return (
        <Link to={`/post/${id}`}>
          <button className='continue-button'>Continue reading</button>
        </Link>
      );
    }
  }

  render() {
    const {
      post: { id, title, body, updatedAt },
    } = this.props;
    return (
      <div className='blog-post-card'>
        <Fragment>
          <p className='date-time'>{updatedAt}</p>
          <h3 className='title'>{title}</h3>
          <p>{body}</p>

          {this.renderContinueReading(id)}
        </Fragment>
      </div>
    );
  }
}

export default BlogPost;
