import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Location from './pages/Location';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />
    </Routes>
  );
}