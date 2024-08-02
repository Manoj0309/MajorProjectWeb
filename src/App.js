import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header'; // Assuming you have a Header component

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Product = lazy(() => import('./pages/Product')); // General Product page if needed
const SE03Page = lazy(() => import('./pages/SE03Page')); // Lazy load the SE03 page
const SE03Max = lazy(() => import('./pages/SE03Mxx')); // Lazy load the SE03 Max page
const SE03Lite = lazy(() => import('./pages/SE03Lite')); // Lazy load the SE03 Lite page
const CompareAll = lazy(() => import('./pages/CompareAll')); // Lazy load the CompareAll page
const PreBook = lazy(() => import('./pages/PreBook'));
const Contact = lazy(() => import('./pages/Contact'));
const Rentals = lazy(() => import('./pages/Rentals'));
const NotFound = lazy(() => import('./pages/NotFound')); // Assuming you have a 404 page

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header /> {/* Include your navigation header */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} /> {/* General Product route */}
          <Route path="/se03" element={<SE03Page />} /> {/* Route for SE03 page */}
          <Route path="/se03max" element={<SE03Max />} /> {/* Route for SE03 Max page */}
          <Route path="/se03-lite" element={<SE03Lite />} /> {/* Route for SE03 Lite page */}
          <Route path="/compare" element={<CompareAll />} /> {/* Route for CompareAll page */}
          <Route path="/pre-book" element={<PreBook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="*" element={<NotFound />} /> {/* 404 page */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
