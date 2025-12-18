import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchLoremData } from '../actions/loremActions';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>A short Naration of Lorem Ipsumsunt aut facere repellat provident occaecati excepturi optio reprehenderit</h1>

      {loading && <h4 data-testid="loading">Loading posts...</h4>}

      {error && <div data-testid="error">Error: {error}</div>}

      {!loading && !error && (
        <ul className="posts-list">
          {data && data.length > 0 ? (
            data.map((post, index) => (
              <li key={index} className="grid-item" data-testid="post-item">
                <h4 className="title" data-testid="post-title">{post.title}</h4>
                <p className="body" data-testid="post-body">{post.body}</p>
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
