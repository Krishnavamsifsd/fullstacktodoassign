import React, { useState } from 'react';
import './Createaccount.css';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const data = {
      username: username,
      password: password
    };
    try {
      const response = await fetch('http://localhost:5500/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const responseData = await response.json();
      console.log(responseData);
      setMessage('Account created successfully');
    } catch (err) {
      console.log(err);
    }
  }
  

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type="submit">Create Account</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateAccount;