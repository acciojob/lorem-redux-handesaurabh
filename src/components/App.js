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

        {/* Posts Grid */}
        <ul className="grid-container">
          {Array.from({ length: 6 }, (_, index) => {
            const post = data[index];
            return (
              <li key={index} className="grid-item" data-testid="post-item">
                <p className="id" data-testid="post-id">
                  <span className="label">ID :</span>
                  {post ? post.id : (loading ? 'Loading...' : 'No data')}
                </p>
                <p className="title" data-testid="post-title">
                  <span className="label">Title :</span>
                  {post ? post.title : (loading ? 'Loading titles' : 'No data')}
                </p>
                <p className="body" data-testid="post-body">
                  <span className="label">Body :</span>
                  {post ? post.body : (loading ? 'Loading body' : 'No data')}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
