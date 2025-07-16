import React, { useState } from 'react';

const mockGames = [
  { id: 1, league: 'NFL', team1: 'Bengals', team2: 'Bills' },
  { id: 2, league: 'NBA', team1: 'Nets', team2: 'Celtics' },
  { id: 3, league: 'NCAA', team1: 'Alabama', team2: 'Georgia' }
];

function PickBoard() {
  const [picks, setPicks] = useState({});

  const handlePick = (gameId, team) => {
    setPicks({ ...picks, [gameId]: team });
  };

  const handleSubmit = () => {
    console.log("Submitted picks:", picks);
    alert("Your picks have been submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">🎟️ The Ticket - Weekly Picks</h1>
      {mockGames.map(game => (
        <div key={game.id} className="bg-gray-800 p-4 rounded mb-4">
          <h2 className="text-xl font-semibold mb-2">{game.league}: {game.team1} vs {game.team2}</h2>
          <div className="flex gap-4">
            <button
              onClick={() => handlePick(game.id, game.team1)}
              className={`px-4 py-2 rounded ${picks[game.id] === game.team1 ? 'bg-green-500' : 'bg-gray-700'}`}
            >
              {game.team1}
            </button>
            <button
              onClick={() => handlePick(game.id, game.team2)}
              className={`px-4 py-2 rounded ${picks[game.id] === game.team2 ? 'bg-green-500' : 'bg-gray-700'}`}
            >
              {game.team2}
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-yellow-500 text-black px-6 py-2 rounded mt-6"
      >
        Submit Picks
      </button>
    </div>
  );
}

export default PickBoard;