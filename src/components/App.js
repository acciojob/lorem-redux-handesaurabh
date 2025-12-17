import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  const loremState = useSelector(state => state.lorem || { loading: true, data: { title: '', body: '' }, error: '' });
  const { loading, data, error } = loremState;

  useEffect(() => {
    // Small delay to ensure component is mounted
    const timer = setTimeout(() => {
      dispatch(fetchLoremData());
    }, 100);
    
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Lorem Ipsum Dolor Sit Amet</h1>
      <div>
        {loading && <h4 style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Fetching data...</h4>}
        {error && <p style={{ color: '#d32f2f', textAlign: 'center', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>Error: {error}</p>}
        {data && data.title && data.body && (
          <ul>
            <li>
              <h4 className="title">{data.title}</h4>
              <p className="body">{data.body}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
