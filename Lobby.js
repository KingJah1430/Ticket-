import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lobby() {
  const name = localStorage.getItem('displayName');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">🎟️ Welcome to The Ticket, {name}!</h2>
      <p className="mb-2 text-lg">Make your weekly picks and compete!</p>
      <button
        onClick={() => navigate('/picks')}
        className="bg-yellow-500 text-black px-6 py-2 rounded mt-4"
      >
        Go to Pick Board
      </button>
    </div>
  );
}

export default Lobby;