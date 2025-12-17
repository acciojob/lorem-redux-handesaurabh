
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>Lorem Ipsum Data</h1>
      <div>
        <h2 style={{ color: '#555', marginTop: '20px' }}>Welcome to Lorem Ipsum Generator</h2>
        <p style={{ lineHeight: '1.6', color: '#666' }}>This is a React & Redux application that fetches Lorem Ipsum text.</p>
        <p style={{ textAlign: 'center', color: '#888', fontStyle: 'italic' }}>Fetching data...</p>
      </div>
    </div>
  );
};

export default App;

