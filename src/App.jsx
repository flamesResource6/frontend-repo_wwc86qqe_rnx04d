import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CampusConnect from './pages/suites/CampusConnect';
import MyHRSuite from './pages/suites/MyHRSuite';
import MyCRMSuite from './pages/suites/MyCRMSuite';
import Orbit from './pages/suites/Orbit';
import LaaleAI from './pages/suites/LaaleAI';
import Contact from './pages/Contact';
import FloatingChat from './components/FloatingChat';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/suites/campus-connect" element={<CampusConnect />} />
        <Route path="/suites/my-hr-suite" element={<MyHRSuite />} />
        <Route path="/suites/my-crm-suite" element={<MyCRMSuite />} />
        <Route path="/suites/orbit" element={<Orbit />} />
        <Route path="/suites/laale-ai" element={<LaaleAI />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FloatingChat />
    </div>
  );
}
