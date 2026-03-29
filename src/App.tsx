/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import FloatingCallButton from './components/FloatingCallButton';
import Loading from './components/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import ConfirmBooking from './pages/ConfirmBooking';
import Success from './pages/Success';
import Specialists from './pages/Specialists';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  // Redirect to home page on initial load (refresh) if not already there
  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show loader on route change and wait for all images to finish loading
  useEffect(() => {
    setIsLoading(true);
    
    const checkImages = async () => {
      // Small delay to allow React to render the new route's DOM
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const images = Array.from(document.getElementsByTagName('img'));
      
      if (images.length === 0) {
        // If no images, wait a tiny bit for other assets and then hide
        setTimeout(() => setIsLoading(false), 800);
        return;
      }

      const imagePromises = images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve); // Resolve on error too so we don't get stuck
        });
      });

      await Promise.all(imagePromises);
      // Small extra buffer for smooth transition after images are ready
      setTimeout(() => setIsLoading(false), 500);
    };

    checkImages();
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loading key="loader" />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/book" element={<PageTransition><Book /></PageTransition>} />
        <Route path="/confirm-booking" element={<PageTransition><ConfirmBooking /></PageTransition>} />
        <Route path="/success" element={<PageTransition><Success /></PageTransition>} />
        <Route path="/specialists" element={<PageTransition><Specialists /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
      <FloatingCallButton />
    </BrowserRouter>
  );
}
