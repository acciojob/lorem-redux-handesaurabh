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
    <div className="page">
      <div className="card">
        <h1 className="main-title">A short Naration of Lorem Ipsum</h1>
        <h4 className="intro-text">
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>

        {/* Loading State */}
        {loading && (
          <div data-testid="loading" className="loading-text">Loading...</div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div data-testid="error" className="error-text">
            Error: {error}
          </div>
        )}

        {/* Success State */}
        {!loading && !error && data.length > 0 && (
          <ul className="grid-container">
            {data.map((post) => (
              <li key={post.id} className="grid-item" data-testid="post-item">
                <p className="id" data-testid="post-id">
                  <span className="label">ID :</span>
                  {post.id}
                </p>
                <p className="title" data-testid="post-title">
                  <span className="label">Title :</span>
                  {post.title}
                </p>
                <p className="body" data-testid="post-body">
                  <span className="label">Body :</span>
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;