import React, { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <h2>Click a button to change background color</h2>
      <button onClick={() => setBgColor('lightblue')} style={{ marginRight: '10px' }}>
        Light Blue
      </button>
      <button onClick={() => setBgColor('lightgreen')} style={{ marginRight: '10px' }}>
        Light Green
      </button>
      <button onClick={() => setBgColor('lightcoral')}>
        Light Coral
      </button>
    </div>
  );
}

export default App;
