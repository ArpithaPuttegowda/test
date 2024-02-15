import React, { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Load username from local storage once on component mount

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]); // Update local storage whenever username changes

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <p>Hello, {username}!</p>
    </div>
  );
}
