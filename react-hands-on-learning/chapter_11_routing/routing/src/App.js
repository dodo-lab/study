import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {
  About,
  Contact,
  Events,
  History,
  Home,
  Location,
  Products,
  Services,
  Whoops404,
} from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={<Navigate to="/about/services" />}
        ></Route>
        <Route path="/about" element={<About />}>
          <Route path="services" element={<Services />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
