import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Header />
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
