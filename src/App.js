import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar'; // Adjust the path as necessary
import HeroSection from './components/Hero'; // Adjust the path as necessary
import Dashboard from './components/Dashboard'; // Adjust the path as necessary
import ExpenseSummary from './components/Expenses';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HeroSection />} exact />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expenses" element={<ExpenseSummary />} />
          {/* You can add more Route components here for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
