import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import Login from './components/login';
import './App.css';  // Link to the external CSS file for styling

const App = () => {
  return (
    <Router>
      <div className="app-background">  {/* Add class for background image styling */}
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
