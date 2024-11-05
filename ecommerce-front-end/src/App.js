import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard'; 
import Register from './components/Register';
import User from './components/User';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/User" element={<User/>}/>
      </Routes>
    </Router>
  );
}

export default App;
