import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password
    };
    try {
      const response = await fetch('http://localhost:5500/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.message === "Login successful") {
        setLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.log(err);
    }
  }

  if (loggedIn) {
    return <Navigate to="/Todos" />;
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;