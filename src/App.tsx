import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Gallery } from './pages/Gallery';
import { Detail } from './pages/Detail';
import { AddUI } from './pages/AddUI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add" element={<AddUI />} />
          <Route path="components" element={<Gallery />} />
          <Route path="layouts" element={<Gallery />} />
          <Route path="animations" element={<Gallery />} />
          <Route path="saved" element={<Gallery />} />
          <Route path="settings" element={<div className="text-gray-400">Settings Page (Coming Soon)</div>} />
          <Route path="components/:id" element={<Detail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
