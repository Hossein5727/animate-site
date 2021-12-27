import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </AnimatePresence >
    </Layout>
  );
}

export default App;
