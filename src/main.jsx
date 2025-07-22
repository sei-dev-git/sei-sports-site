import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Leagues from './pages/Leagues';
import Tournaments from './pages/Tournaments';
import Fixtures from './pages/Fixtures';
import Teams from './pages/Teams';
import Contact from './pages/Contact';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/leagues" element={<Leagues />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

