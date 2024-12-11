import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import HomeScreen from './components/HomeScreen';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;