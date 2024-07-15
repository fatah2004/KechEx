// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import ProductPage from './components/ProductPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/products/:productId" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
