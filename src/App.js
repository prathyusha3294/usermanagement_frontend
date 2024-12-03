import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup';
import CustomerProfile from './components/CustomerProfile';
import Sidebar from './components/Sidebar';
import './App.css';  // Link to the external CSS file for styling

const App = () => {
  return (
      <Router>
        <div className="app-background">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path='/customerprofile' element={<CustomerProfile/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
          </Routes>
        </div>
      </Router>
  );
};

export default App;
