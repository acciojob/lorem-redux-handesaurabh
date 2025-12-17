import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  // Simplify state handling
  const loremState = useSelector(state => state.lorem);
  const loading = loremState?.loading ?? true;
  const data = loremState?.data ?? [];
  const error = loremState?.error ?? '';

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      dispatch(fetchLoremData());
    }, 100);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ color: '#333', textAlign: 'center', marginBottom: '10px' }}>A short Naration of Lorem Ipsum</h1>
      <h3 style={{ color: '#555', textAlign: 'center', marginBottom: '30px', fontWeight: 'normal' }}>
        Below Contains A title and Body gotten from a random API, Please take your time to Review
      </h3>
      <div>
        {loading && <h4 style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Fetching data...</h4>}
        {error && <p style={{ color: '#d32f2f', textAlign: 'center', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>Error: {error}</p>}
        <div className="grid-container">
          {data.map((post, index) => (
            <div key={index} className="grid-item">
              <div className="title">Title : {post.title}</div>
              <div className="body">Body : {post.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
