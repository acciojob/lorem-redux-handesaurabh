import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  const loremState = useSelector(state => state.lorem);
  const { loading, data, error } = loremState;

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>A short Naration of Lorem Ipsum</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
        Below Contains A title and Body gotten froma random API, Please take your time to Review
      </p>
      <div>
        {loading && <h4 style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Fetching data...</h4>}
        {error && <p style={{ color: '#d32f2f', textAlign: 'center', padding: '10px', backgroundColor: '#ffebee', borderRadius: '4px' }}>Error: {error}</p>}
        {!loading && !error && data.title && (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>
              <h4 className="title" style={{ color: '#444', marginBottom: '10px' }}>Title :{data.title}</h4>
              <p className="body" style={{ lineHeight: '1.6', color: '#666' }}>{data.body}</p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
