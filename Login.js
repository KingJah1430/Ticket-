import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('displayName', name);
      navigate('/lobby');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">🎟️ The Ticket</h1>
      <input
        type="text"
        className="px-4 py-2 text-black rounded mb-4"
        placeholder="Enter display name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-500 text-black px-6 py-2 rounded"
      >
        Enter Lobby
      </button>
    </div>
  );
}

export default Login;