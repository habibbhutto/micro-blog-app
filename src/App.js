import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path='/post/:id' element={<PostView />} />
          <Route path='/' element={<BlogPostList />} />
        </Routes>
        <MainFooter />
      </Router>
    </Provider>
  );
}

store.dispatch(fetchAllPosts());

export default App;
