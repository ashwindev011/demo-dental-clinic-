import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Calendar, 
  Home, 
  Stethoscope, 
  Users, 
  Image as ImageIcon, 
  Info, 
  Mail,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services', icon: Stethoscope },
    { name: 'Care', path: '/specialists', icon: Users },
    { name: 'Gallery', path: '/gallery', icon: ImageIcon },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <>
      <header 
        className={`fixed top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 z-50 transition-all duration-300 px-4 py-3 md:px-8 md:py-4 rounded-2xl md:rounded-3xl ${
          scrolled 
            ? 'glass-effect border border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-xl shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-primary transition-transform duration-300 group-hover:scale-110">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="size-6" />
              </div>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Lumina<span className="text-primary">Dental</span>
            </h1>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 bg-slate-100/50 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
            {navLinks.map(link => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all rounded-full flex items-center gap-2 ${
                    isActive 
                      ? 'text-primary' 
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full shadow-sm z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <link.icon className={`size-4 relative z-10 ${isActive ? 'text-primary' : ''}`} />
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-primary/10 transition-all text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary flex items-center justify-center border border-transparent hover:border-primary/20"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            
            <Link 
              to="/book" 
              className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all items-center gap-2 shadow-lg shadow-primary/20"
            >
              <Calendar className="size-4" />
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 flex items-center justify-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden absolute top-[110%] left-4 right-4 p-4 border border-primary/20 rounded-3xl bg-background-light dark:bg-background-dark shadow-2xl flex flex-col gap-2 z-50"
            >
              {navLinks.map(link => {
                const isActive = location.pathname === link.path;
                return (
                  <Link 
                    key={link.name}
                    onClick={() => setIsOpen(false)} 
                    className={`flex items-center justify-between text-base font-medium p-4 rounded-2xl transition-all ${
                      isActive 
                        ? 'bg-primary/10 text-primary border border-primary/20' 
                        : 'text-slate-900 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`} 
                    to={link.path}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="size-5" />
                      {link.name}
                    </div>
                    <ChevronRight className={`size-4 transition-transform ${isActive ? 'translate-x-1' : 'opacity-30'}`} />
                  </Link>
                );
              })}
              <div className="h-px w-full bg-primary/10 my-2"></div>
              <Link 
                onClick={() => setIsOpen(false)} 
                className="flex items-center justify-center gap-2 text-base font-bold p-4 rounded-2xl bg-primary text-white text-center shadow-lg shadow-primary/20" 
                to="/book"
              >
                <Calendar className="size-5" />
                Book Appointment
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* Spacer to prevent content from jumping under the fixed navbar */}
      <div className="h-[80px] md:h-[110px]"></div>
    </>
  );
}
