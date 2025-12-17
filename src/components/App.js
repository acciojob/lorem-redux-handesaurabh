import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions.js";

const App = () => {
  const dispatch = useDispatch();
  // Simplify state handling
  const loremState = useSelector(state => state.lorem);
  const loading = loremState?.loading ?? true;
  const data = loremState?.data ?? { title: 'Default Title', body: 'Default Body' };
  const error = loremState?.error ?? '';

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      dispatch(fetchLoremData());
    }, 100);
    
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Below Contains A title and Body gotten froma random API, Please take your time to Review</h1>
      <div>
        {loading && <h4 style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Fetching data...</h4>}
        {error && <p style={{ color: '#d32f2f', textAlign: 'center', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>Error: {error}</p>}
        <ul>
          <li>
            <div className="title">{data.title}</div>
            <div className="body">{data.body}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
