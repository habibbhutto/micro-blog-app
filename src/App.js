import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import BlogPostList from './components/BlogPostList';
import PostView from './components/PostView';
import { fetchAllPosts } from './store/actions';
import store from './store';
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainHeader />
        <Switch>
          <Route path='/post/:id' component={PostView} />
          <Route path='/' component={BlogPostList} />
        </Switch>
        <MainFooter />
      </Router>
    </Provider>
  );
}

store.dispatch(fetchAllPosts());

export default App;
