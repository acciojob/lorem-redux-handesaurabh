import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoremData } from '../actions/loremActions';
import '../styles/App.css';

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.lorem);
  
  // Initially assume we're loading
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    dispatch(fetchLoremData());
    // This will be updated by Redux when the state changes
  }, [dispatch]);

  // Update local loading state when Redux loading state changes
  React.useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  // Show loading if currently loading
  const shouldShowLoading = isLoading;

  return (
    <div className="page">
      <div className="card">
        {/* Main heading */}
        <h1 className="main-title">A short Naration of Lorem Ipsum</h1>
        {/* Intro text – must match Cypress string EXACTLY */}
        <h4 className="intro-text">
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>
        
        {shouldShowLoading ? (
          <h4 data-testid="loading" className="loading-text">
            Loading posts...
          </h4>
        ) : error ? (
          <div data-testid="error" className="error-text">
            Error: {error}
          </div>
        ) : (
          <ul className="grid-container">
            {(data && data.length > 0 ? data : []).slice(0, 6).map((post, index) => (
              <li key={index} className="grid-item" data-testid="post-item">
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
