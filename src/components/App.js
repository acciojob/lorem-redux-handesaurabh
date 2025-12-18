import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoremData } from '../actions/loremActions';
import './../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div className="page">
      <div className="card">
        <h1 className="main-title">A short Naration of Lorem Ipsum</h1>
        <p className="subtitle">
          Below Contains A title and Body gotten from<br />
          a random API, Please take your time to Review
        </p>

        {loading && (
          <h4 data-testid="loading" className="loading-text">
            Loading posts...
          </h4>
        )}

        {error && (
          <div data-testid="error" className="error-text">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <ul className="grid-container">
            {data && data.length > 0 ? (
              data.slice(0, 6).map((post, index) => (
                <li key={index} className="grid-item" data-testid="post-item">
                  <p className="title">
                    <span className="label">Title </span>
                    {post.title}
                  </p>
                  <p className="body" data-testid="post-body">
                    <span className="label">Body </span>
                    {post.body}
                  </p>
                </li>
              ))
            ) : (
              <li>No posts available</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
