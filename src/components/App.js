import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoremData } from '../actions/loremActions';
import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div className="app">
      <div className="header">
        <h1 data-testid="intro-text">A short Naration of Lorem Ipsum</h1>
        <p data-testid="subtitle">Below Contains A title and Body gotten froma random API, Please take your time to Review</p>
      </div>

      {loading && <h4 data-testid="loading">Loading posts...</h4>}

      {error && <div data-testid="error">Error: {error}</div>}

      {!loading && !error && (
        <ul className="posts-list grid-container">
          {data && data.length > 0 ? (
            data.map((post, index) => (
              <li key={index} className="grid-item" data-testid="post-item">
                <h4 className="title" data-testid="post-title">Title :{post.title}</h4>
                <p className="body" data-testid="post-body">Body :{post.body}</p>
              </li>
            ))
          ) : (
            <li>No posts available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;
