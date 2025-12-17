import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  // Simplify state handling
  const loremState = useSelector(state => state.lorem);
  const loading = loremState?.loading ?? true;
  const data = loremState?.data || [];
  const error = loremState?.error ?? '';

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      dispatch(fetchLoremData());
    }, 200);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '10px' }}>A short Naration of Lorem Ipsum</h1>
      <h4 style={{ color: '#555', textAlign: 'center', marginBottom: '30px', fontWeight: 'normal' }}>
        Below Contains A title and Body gotten froma random API, Please take your time to Review
      </h4>
      <ul className="grid-container" data-testid="grid-container">
        {loading && <li className="grid-item" style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }} data-testid="loading-message">Fetching data...</li>}
        {error && <li className="grid-item" style={{ color: 'red', textAlign: 'center' }} data-testid="error-message">{error}</li>}
        {data && data.length > 0 && data.map((post, index) => (
          <li key={index} className="grid-item" data-testid="post-item">
            <div className="title" data-testid="post-title">Title :{post.title}</div>
            <div className="body" data-testid="post-body">Body :{post.body}</div>
          </li>
        ))}
        {/* Fallback for when data is empty but loading is false */}
        {!loading && data && data.length === 0 && (
          <li className="grid-item" style={{ textAlign: 'center', color: '#888' }}>
            <div className="title">No data available</div>
            <div className="body">Please try again later</div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default App;
