import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Lobby from './pages/Lobby';
import PickBoard from './pages/PickBoard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/picks" element={<PickBoard />} />
      </Routes>
    </Router>
  );
}

export default App;