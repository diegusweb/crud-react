import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about">
              <Route index element={<AboutPage />} />
              <Route path=":number" element={<AboutPage />} />
          </Route>
  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
