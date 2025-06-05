import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './components/About';
import HealthService from './components/HealthService';
import Pricing from './components/Pricing';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/health" element={<HealthService />} />
        <Route path="/Pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
