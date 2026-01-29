import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShayariList from './pages/ShayariList';
import StoryList from './pages/StoryList';
import Gallery from './pages/Gallery';
import Admin from './pages/Admin';
import About from './pages/About';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen transition-colors duration-300">
          <Navbar />
          <main className="flex-grow bg-white dark:bg-gray-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shayari" element={<ShayariList />} />
              <Route path="/stories" element={<StoryList />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;