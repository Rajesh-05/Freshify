import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import AppBar from './components/AppBar';

const App = () => {
  return (
    <div className="App">
    <Router >
      <Routes basename="/">
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;