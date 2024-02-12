import React, { useState } from 'react';
import { Link } from 'react-router-dom'


export function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" autocomplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" autocomplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to={`/home`}><button type="submit">Login</button></Link>
      </form>
    </div>
  );
};